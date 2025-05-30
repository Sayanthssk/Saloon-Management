import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useAppointment } from "../AppointmentContext";
import moment from "moment";
import { useRouter } from "expo-router";
import instance from "../Instance";

const AppointmentDetails = () => {
  const { selectedAppointment } = useAppointment();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  console.log(selectedAppointment.salonId.image,"akshay");
  

  const handleCancelAppointment = async () => {
    setLoading(true);
    try {
      const response = await instance.put(`/bookings/cancel/${selectedAppointment._id}`);
      alert("Appointment successfully canceled!");
      selectedAppointment.status = "canceled";
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Failed to cancel the appointment. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFeedback = () => {
    router.push("Screens/FeedbackScreen");
  };

  const staffs = selectedAppointment.salonId?.staffs || [];
  const stylist = staffs.find(
    (staff) => staff._id === selectedAppointment.stylistId
  );

  const formattedDate = moment(selectedAppointment?.date).format("MMMM DD, YYYY");

  const isCanceled = selectedAppointment.status === "canceled";
  const currentDateTime = moment();
  const appointmentDateTime = moment(
    `${selectedAppointment.date} ${selectedAppointment.slot}`,
    "YYYY-MM-DD hh:mm A"
  );
  const isPastAppointment = currentDateTime.isAfter(appointmentDateTime);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={{
            uri:`http://192.168.1.12:8000/uploads/${selectedAppointment.salonId.image}`,
          }}
          style={styles.houseImage}
        />

        <View style={styles.detailsCard}>
          <Text style={styles.locationText}>
            Location: {selectedAppointment.salonId.location}
          </Text>
          <Text style={styles.title}>
            Salon Name: {selectedAppointment.salonId.salonName}
          </Text>
          <Text style={styles.infoText}>
            Slot: {selectedAppointment.slot || "Not Specified"}
          </Text>
          <Text style={styles.infoText}>
            Appointment Date: {formattedDate || "Not Provided"}
          </Text>
          <Text style={styles.infoText}>
            Stylist Name: {stylist?.staffName || "Not Provided"}
          </Text>
          <Text
            style={[
              styles.infoText,
              { color: isCanceled || isPastAppointment ? "red" : "green" },
            ]}
          >
            Status: {isCanceled ? "Canceled" : isPastAppointment ? "Appointment Passed" : "Active"}
          </Text>

          {!isPastAppointment && (
            <TouchableOpacity
              style={[
                styles.cancelButton,
                { backgroundColor: isCanceled ? "#ccc" : "#5d89ba" },
              ]}
              onPress={handleCancelAppointment}
              disabled={loading || isCanceled}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.cancelButtonText}>
                  {isCanceled ? "Appointment Canceled" : "Cancel Appointment"}
                </Text>
              )}
            </TouchableOpacity>
          )}

          {isPastAppointment && !isCanceled && (
            <TouchableOpacity style={styles.feedbackButton} onPress={handleFeedback}>
              <Text style={styles.feedbackButtonText}>Give Feedback</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default AppointmentDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  houseImage: {
    width: "100%",
    height: 500,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  detailsCard: {
    marginTop: -10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  locationText: {
    fontSize: 16,
    color: "#777",
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: "#555",
    marginVertical: 5,
  },
  cancelButton: {
    marginTop: 20,
    backgroundColor: "#5d89ba",
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  cancelButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  feedbackButton: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    borderRadius: 15,
    alignItems: "center",
  },
  feedbackButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
