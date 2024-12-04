const delayFor = (seconds: number = 5): Promise<void> =>
  new Promise((resolve) => {
    let timerId = setTimeout(() => {
      clearTimeout(timerId);
      resolve();
    }, seconds * 1000);
  });

const asyncPipe =
  (...fns: Array<(data: any) => any | Promise<any>>) =>
  async (data: any): Promise<any> =>
    await fns.reduce(
      async (resultPromise, fn) => fn(await resultPromise),
      Promise.resolve(data)
    );

const PassPercentage = 80;

enum Result {
  Passed = "Passed",
  Failed = "Failed",
}

type GameContext = {
  quiz: Quiz;
  userResponse: Array<number>;
  score: number;
  percentage: number;
  currentQuestionIndex: number;
  result?: Result;
};

type Quiz = Array<{
  question: string;
  options: Array<string>;
  correctOptionIndex: number;
}>;

// IMPURE
const startQuiz = () => {
  // TODO: Load from config.json
  return {
    quiz: [
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Bengaluru", "Pune"],
        correctOptionIndex: 1,
      },
      {
        question: "What is the capital of Maharashtra?",
        options: ["Mumbai", "Kolhapur", "Thane", "Pune"],
        correctOptionIndex: 0,
      },
      {
        question: "What is the capital of Karnataka?",
        options: ["Mysore", "Belgaum", "Bengaluru", "Mangluru"],
        correctOptionIndex: 2,
      },
    ],
    userResponse: [],
    score: 0,
    percentage: 0,
    currentQuestionIndex: 0,
    result: undefined,
  };
};

// IMPURE => UI
export type QuizListener = (
  quizQuestion: string,
  quizOptions: string[],
  chooseOption: (option: number) => void
) => void;

let listener: QuizListener | undefined;
export const addListener = (_listener: QuizListener) => (listener = _listener);
export const removeListener = () => (listener = undefined);
// const showAndAnswerQuiz = async (gameContext: GameContext) => {
//   const quizQuestion =
//     gameContext.quiz[gameContext.currentQuestionIndex].question;
//   const quizOptions =
//     gameContext.quiz[gameContext.currentQuestionIndex].options;
//   // debugger;
//   if (listener)
//     listener(quizQuestion, quizOptions, (option: number) => {
//       if (!option) return;
//       console.log("OPTION RECEIVED ", option);
//     });
//   return new Promise((resolve) => {
//     // TODO
//   });
//   //   return gameContext;
//   //   await delayFor(2);
//   //   return {
//   //     ...gameContext,
//   //     userResponse: [...gameContext.userResponse, 0],
//   //   };
// };

// PURE

const showAndAnswerQuiz = async (gameContext: GameContext) => {
  const quizQuestion =
    gameContext.quiz[gameContext.currentQuestionIndex].question;
  const quizOptions =
    gameContext.quiz[gameContext.currentQuestionIndex].options;

  return new Promise<GameContext>((resolve) => {
    if (listener) {
      listener(quizQuestion, quizOptions, (option: number) => {
        console.log("OPTION RECEIVED:", option);

        // Update user response and resolve the promise with the updated context
        const updatedContext = {
          ...gameContext,
          userResponse: [...gameContext.userResponse, option],
        };
        resolve(updatedContext);
      });
    } else {
      resolve(gameContext); // Resolve with the current context if no listener
    }
  });
};

const calculateScoreAndPercentage = (gameContext: GameContext) => {
  const scoreForLastQuestion =
    gameContext.quiz[gameContext.currentQuestionIndex].correctOptionIndex ===
    gameContext.userResponse[gameContext.currentQuestionIndex]
      ? 1
      : 0;
  const score = gameContext.score + scoreForLastQuestion;
  const percentage = (score / gameContext.quiz.length) * 100;
  return {
    ...gameContext,
    score,
    percentage,
    currentQuestionIndex: gameContext.currentQuestionIndex + 1,
  };
};

// PURE
const stopQuiz = (gameContext: GameContext) => {
  const result: Result =
    gameContext.percentage >= PassPercentage ? Result.Passed : Result.Failed;
  return {
    ...gameContext,
    result,
  };
};

// PURE
const createReport = (gameContext: GameContext) => {
  return {
    report: [
      "SCORE: " + gameContext.score.toString(),
      "PERCENTAGE: " + Math.ceil(gameContext.percentage).toString(),
      "RESULT: " + gameContext.result,
    ].join("\n"),
    gameContext,
  };
};

// IMPURE
const trace = (gameContext: GameContext) => {
  console.log(
    "OPTION = ",
    gameContext.userResponse[gameContext.currentQuestionIndex - 1],
    "SCORE = ",
    gameContext.score
  );
  return gameContext;
};

const saveToLMS = (gameContext: GameContext) => {
  // TODO;
  return gameContext;
};

// const userSimulatedInput = [1, 1, 2];

export const doQuiz = async () => {
  // IMPURE
  // WORKFLOW
  let result = await asyncPipe(
    startQuiz,
    showAndAnswerQuiz,
    calculateScoreAndPercentage,
    saveToLMS,
    showAndAnswerQuiz,
    calculateScoreAndPercentage,
    saveToLMS,
    showAndAnswerQuiz,
    calculateScoreAndPercentage,
    saveToLMS,
    stopQuiz,
    createReport
  )({});

  console.log(result.report);
};
