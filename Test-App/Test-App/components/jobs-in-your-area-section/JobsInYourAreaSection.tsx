import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Screens } from "@/utility-functions/types";
import { styles } from "./styles";
import { Styles } from "@/assets/theme";
import { SubHeader } from "../sub-header/SubHeader";
import {
  fetchMyJobs,
  useIsJobsClientState_Authorised,
  useJobsClientData_Ready,
} from "@/actors/jobs-client";

const JobsInYourAreaSection = ({
  sectionTitle,
  data,
}: {
  sectionTitle?: string;
  data: any;
}) => {
  const router = useRouter();

  const jobsReadyData = useJobsClientData_Ready();
  const jobsAuthorised = useIsJobsClientState_Authorised();

  useEffect(() => {
    if (jobsAuthorised) {
      fetchMyJobs("", "", 0, 1);
    }
  }, [jobsAuthorised]);

  console.log(">>> jobsReadyData", JSON.stringify(jobsReadyData));

  return (
    <>
      <SubHeader title="Jobs in your area" />
      <View style={styles.sectionContainer}>
        <View style={styles.jobsRow}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[styles.scrollViewStyle]}
            contentContainerStyle={[styles.scrollViewContentContainerStyle]}
          >
            {/* {jobsReadyData?.jobs} */}
            {jobsReadyData?.jobs.map((job) => (
              <TouchableOpacity
                key={job.id}
                onPress={() =>
                  router.push({
                    pathname: Screens.JobDetails as any,
                    params: {
                      jobName: job.name,
                      jobDetails: JSON.stringify(job),
                      data: JSON.stringify(data),
                    },
                  })
                }
              >
                <View style={[styles.jobBox, styles.switchReplacement]}>
                  <Text style={styles.jobText}>{job.name.split(" ")[0]}</Text>
                  <Text style={styles.jobText}>{job.name.split(" ")[1]}</Text>
                </View>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.addButton}
              onPress={() =>
                router.push({
                  pathname: Screens.JobListing as any,
                  params: {
                    jobName: "Add Job",
                    data: JSON.stringify(data),
                  },
                })
              }
            >
              <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default JobsInYourAreaSection;
