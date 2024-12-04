import { useEffect, useState } from "react";
import "./App.css";
import { addListener, doQuiz, QuizListener, removeListener } from "./Quiz";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [quizQuestion, setQuizQuestion] = useState<string>("");
  const [quizOptions, setQuizOptions] = useState<string[]>([]);
  const [chooseOption, setChooseOption] = useState<
    ((option: number) => void) | null
  >(null);

  const quizHasChanged: QuizListener = (
    quizQuestion: string,
    quizOptions: string[],
    _chooseOption: (option: number) => void
  ) => {
    setLoading(false);
    setQuizQuestion(quizQuestion);
    setQuizOptions(quizOptions);
    setChooseOption(() => _chooseOption);
  };

  useEffect(() => {
    addListener(quizHasChanged);
    doQuiz();
    return () => removeListener();
  }, []);

  return (
    <>
      {loading && <div>Loading, please wait...</div>}
      {!loading && (
        <>
          <h3>{quizQuestion}</h3>
          {quizOptions.map((option, index) => (
            <h5 key={index}>
              <button
                onClick={() => {
                  if (chooseOption) {
                    chooseOption(index);
                  }
                }}
              >
                {option}
              </button>
            </h5>
          ))}
        </>
      )}
    </>
  );
}

export default App;
