import { Box, Heading, Text, VStack, UnorderedList, ListItem } from "@chakra-ui/react";

import CustomSmallTitle from "../../../component/common/CustomSmallTitle/CustomSmallTitle";
import CustomSubHeading from "../../../component/common/CustomSubHeading/CustomSubHeading";


const TermsConditions = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box bg={"#E1F0EE"} py={14}>
                <Box maxW={"90%"} mx={"auto"} px={{ base: 2, lg: 4 }}>
                    <VStack spacing={2} align={{ base: "center", lg: "center" }}>
                        <CustomSmallTitle textAlign={"center"}>Terms & Conditions</CustomSmallTitle>
                        <CustomSubHeading
                            highlightText="Guide to Reducing Stress"
                            textAlign={"center"}
                        >
                            The Power of Mindfulness: A
                        </CustomSubHeading>
                    </VStack>
                </Box>
            </Box>

            {/* Content Sections */}
            <Box maxW={"90%"} mx={"auto"} p={{ base: "", lg: "20" }} py={10}>
                <VStack spacing={8} align="stretch">
                    {/* About Psychotherapy */}
                    <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
                        <Heading as="h3" size="md" color="#2b7e7b" mb={4}>
                            About Psychotherapy:
                        </Heading>
                        <Text color="#4A4A4A">
                            Psychotherapy is a way to help people resolve significant emotional distress that is limiting in the way of
                            happiness, health, and interpersonal connection or goals or productivity. The therapist works with
                            the client at understanding the background of the person seeking help and the concerns that led them to seek
                            help. Following this, the client and psychotherapist agree on the treatment goals, procedures, and a regular
                            schedule for the time, price and location of their treatment sessions.
                        </Text>
                    </Box>

                    {/* Potential Risks and Benefits */}
                    <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
                        <Heading as="h3" size="md" color="#2b7e7b" mb={4}>
                            Potential Psychotherapy Services Risks and Benefits:
                        </Heading>
                        <Text color="#4A4A4A">
                            Psychotherapy can have benefits and risks involved. Generally, it is a safe treatment and does not involve the
                            use of any equipment or devices that may cause any physical or mental harm. However, during therapy, you may
                            experience uncomfortable feelings when discussing unpleasant aspects of your life such as personal history,
                            anxious, sadness, frustration, anger and loneliness. On the other hand, psychotherapy has also been shown to
                            have benefits for people who go through it. Therapy often leads to better relationships, solutions to specific
                            problems, and significant reductions in feelings of distress. The scientific knowledge about how therapy works has
                            been developing, and now we have come to know a lot about the benefits and risks involved. Despite that,
                            there is no guarantee what you will experience, as this can greatly depend on your condition and how you
                            maintain involvement. Additionally, it is important to understand that the outcome of therapy depends on
                            various factors such as the rift fit between you and your therapist, the severity of adverse life experiences,
                            and your motivation to work towards long-term goals set during the therapy. However, your therapist will have
                            regular consultations with you to analyze the risks, limits and experiences more broadly from the treatment.
                        </Text>
                    </Box>

                    {/* Responsibilities of the Client */}
                    <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
                        <Heading as="h3" size="md" color="#2b7e7b" mb={4}>
                            Responsibilities of the Client
                        </Heading>
                        <Text color="#4A4A4A">
                            For psychotherapy to be right and helpful for success in therapy. The client must make every effort to prioritize
                            therapy in their routine. To this end, you must attend your sessions on time, be honest and forthcoming with
                            therapy issues, explore yourself freely and be honest with your therapist. Your most important responsibility is to
                            work towards the goals you and your therapist have agreed upon. To accomplish these goals, most often the
                            tasks or homework assigned by your therapist in the sessions are an integral part of the treatment through
                            which the overall goals of your consultation can be achieved. You must take personal responsibility to maximize
                            therapy sessions by discussing therapy goals, approaches and hurdles openly. If you feel unable to
                            accommodate with any parts of the treatment, if you have any questions, please ask and the therapist will be
                            willing to discuss these concerns in full.
                        </Text>
                    </Box>

                    {/* Confidentiality */}
                    <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
                        <Heading as="h3" size="md" color="#2b7e7b" mb={4}>
                            Confidentiality:
                        </Heading>
                        <Text color="#4A4A4A">
                            All information revealed in the session will be strictly confidential. The in-person/psychological services will take place at
                            psychotherapist&apos;s outpatient clinic and offline session will be done via telecommunication techniques. Your
                            consultation will not share the proceedings of this consultation with any other individual or agency.
                            However, with your approval, the proceeding could also be used to liaise their work supervised or for training or
                            research. Apart from this, the details of the consultation would be shared with other health care providers,
                            if consultation are not considered to be mental health related and on specific health-related service or if urgent
                            situations would make breaking confidentiality necessary.
                        </Text>
                    </Box>

                    {/* Limits to Confidentiality - Updated with detailed content from image */}
                    <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
                        <Heading as="h3" size="md" color="#2b7e7b" mb={4}>
                            Limits to confidentiality:
                        </Heading>
                        <Text color="#4A4A4A" mb={4}>
                            While all measures are taken to preserve the confidentiality of the client, however, there are few exceptions to
                            the rule of confidentiality of the client. The therapist would be legally and ethically bound to break the
                            confidentiality clause under the circumstances of risk of serious harm to the client or others, such as:
                        </Text>
                        <UnorderedList ml={8} spacing={2} color="#4A4A4A">
                            <ListItem>Active suicidal intent or attempts</ListItem>
                            <ListItem>Abuse in any form to a child or an adult</ListItem>
                            <ListItem>Homicidal risk</ListItem>
                            <ListItem>Risk of transmission of HIV/AIDS</ListItem>
                            <ListItem>
                                Any other instance where the therapist, based on their clinical discretion, believes it is their duty to disclose.
                            </ListItem>
                        </UnorderedList>
                        <Text color="#4A4A4A" mt={4}>
                            On encountering such sensitive information(s), your therapist is obligated to warn the person in danger and to
                            contact any person in a position to prevent harm to you or another person, including law enforcement and
                            medical personnel. These conditions are applicable as long as you are in psychotherapy treatment with your
                            therapist. By signing the consent form, you acknowledge that you have the right to refuse or revoke your
                            consent at any point of time in the therapy process.
                        </Text>
                    </Box>

                    {/* Telephone Accessibility - Updated with detailed content from image */}
                    <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
                        <Heading as="h3" size="md" color="#2b7e7b" mb={4}>
                            Telephone Accessibility
                        </Heading>
                        <Text color="#4A4A4A">
                            If you need to contact me between sessions, please leave a message using mytherapist portal. I am often not
                            immediately available; however, I will attempt to return your call within 24 hours. Please note that Face-to-face
                            sessions are highly preferable to phone sessions. If a true emergency situation arises, please call 112 or reach
                            out to local emergency services.
                        </Text>
                    </Box>


                    {/* Fees and Cancellation */}
                    <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
                        <Heading as="h3" size="md" color="#2b7e7b" mb={4}>
                            Fees and Cancellation Policy
                        </Heading>
                        <Text color="#4A4A4A">
                            Fees for psychotherapy services are [INSERT FEE STRUCTURE]. Payment is expected at the time of service
                            unless other arrangements have been made in advance.
                        </Text>
                        <Text color="#4A4A4A" mt={4}>
                            If you need to cancel or reschedule an appointment, please provide at least 24 hours&apos; notice. Late
                            cancellations or missed appointments without notice may result in a cancellation fee of [INSERT FEE AMOUNT].
                        </Text>
                    </Box>

                    {/* Agreement */}
                    {/* <Box bg="white" p={6} borderRadius="md" boxShadow="sm">
                        <Heading as="h3" size="md" color="#2b7e7b" mb={4}>
                            Agreement
                        </Heading>
                        <Text color="#4A4A4A" mb={6}>
                            By signing below, you acknowledge that you have read, understood, and agree to these terms and
                            conditions for psychotherapy services.
                        </Text>

                        <Box mt={8} textAlign="center">
                            <CustomButton>I Agree to These Terms</CustomButton>
                        </Box>
                    </Box> */}
                </VStack>
            </Box>
        </Box>
    );
};

export default TermsConditions;