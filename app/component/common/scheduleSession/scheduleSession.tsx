import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Text,
  VStack,
  Spinner,
  Box,
} from "@chakra-ui/react";
import stores from "../../../store/stores";

interface ScheduleSessionProps {
  isOpen: boolean;
  onClose: () => void;
  data?: any;
}

const ScheduleSession: React.FC<ScheduleSessionProps> = ({ isOpen, onClose, data }) => {
  const {appointmentStore: {createBookAppointment}, auth: {openNotification}} = stores;
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [emergencyNumber, setEmergencyNumber] = useState("");
  const [emergencyContactName, setEmergencyContactName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim() || !emergencyNumber.trim()) {
      setError("All required fields must be filled.");
      return;
    }

    setLoading(true);
    setError("");

    const formData = {
      name,
      phone,
      emergencyNumber,
      emergencyContactName,
      assignTo: data?.username,
    };

    try {
      const response = await createBookAppointment(formData);
      openNotification({
        title: "Booking Successfully",
        message: response?.message,
        type: "success"
      });

      if (data?.link) {
        setTimeout(() => {
          window.open(data.link, "_blank", "noopener,noreferrer");
        }, 2000);
      }

      setTimeout(() => {
        handleClose();
      }, 5000);
    } catch (err: any) {
      openNotification({
        title: "Booking Failed",
        message: err?.message,
        type: "error"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setName("");
    setPhone("");
    setEmergencyNumber("");
    setEmergencyContactName("");
    setError("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "md", lg: "lg" }}>
      <ModalOverlay />
      <ModalContent maxW={{ base: "320px", md: "600px", lg: "720px" }} borderRadius="lg" boxShadow="lg" p={5}>
        <ModalHeader textAlign="center" fontSize="xl" fontWeight="bold">
          Book Your Appointment
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={2} align="stretch">
            <FormControl>
              <FormLabel fontWeight="semibold">Full Name*</FormLabel>
              <Input
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                focusBorderColor="blue.500"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="semibold">Contact Number*</FormLabel>
              <Input
                placeholder="Enter your contact number"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                focusBorderColor="blue.500"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontWeight="semibold">Emergency Contact Number*</FormLabel>
              <Input
                placeholder="Enter emergency contact number"
                type="tel"
                value={emergencyNumber}
                onChange={(e) => setEmergencyNumber(e.target.value)}
                focusBorderColor="blue.500"
              />
            </FormControl>

            <Box bg="gray.100" p={3} borderRadius="md" fontSize="sm" color="gray.700">
              <b>Message:</b> Providing emergency contact detail is mandatory for receiving therapy at Metamind. This contact will only be used in case of a crisis to ensure your safety and well-being.
            </Box>

            <FormControl>
              <FormLabel fontWeight="semibold">Name of the Emergency Contact</FormLabel>
              <Input
                placeholder="Enter emergency contact's name"
                value={emergencyContactName}
                onChange={(e) => setEmergencyContactName(e.target.value)}
                focusBorderColor="blue.500"
              />
            </FormControl>

            {error && <Text color="red.500" fontSize="sm" fontWeight="medium" textAlign="center">{error}</Text>}

            <Checkbox colorScheme="blue" borderColor="gray.600">
              By submitting this form, you consent to take treatment with us and acknowledge that you have read and understood the terms/policy of treatment.
            </Checkbox>
          </VStack>
        </ModalBody>

        <ModalFooter display="flex" justifyContent="center" gap={4}>
          <Button
            colorScheme="blue"
            size="lg"
            w="full"
            borderRadius="md"
            onClick={handleSubmit}
            isDisabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Submit"}
          </Button>
          <Button
            variant="outline"
            colorScheme="gray"
            w="full"
            borderRadius="md"
            onClick={onClose}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ScheduleSession;