import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AssesmentHeroSection from './AssesmentHeroSection/AssesmentHeroSection'
import AssesmentValuesSection from './AssesmentValuesSection/AssesmentValuesSection'
import AssesmentAccordion from './AssesmentAccordion/AssesmentAccordion'
import RightAssesment from './RightAssesment/RightAssesment'
import WorkingSteps from '../../service/component/WorkingSteps/WorkingSteps'
import FAQ from '../../../component/FAQ/FAQ'
import stores from '../../../store/stores'
import { observer } from 'mobx-react-lite'
import AssessmentTestimonialSection from './TestimonialSection/TestimonialSection'
import AssessmentCallComponent from './AssessmentCallComponent/AssessmentCallComponent'

const AssesmentPage = observer(() => {

  const [content, setContent] = useState<any>({});
  const {
    companyStore: { getPageContent, companyDetails },
  } = stores;

  useEffect(() => {
    setContent(getPageContent("home") || {});
  }, [companyDetails, getPageContent]);

  return (
    <Box>
      <AssesmentHeroSection />
      <AssesmentValuesSection />
      <AssesmentAccordion />
      <Box my={{ base: "70px", md: "4rem", lg: "80px" }}>
        <RightAssesment />
      </Box>
      <AssessmentCallComponent />
      <Box mt={{ base: "70px", md: "4rem", lg: "80px" }}>
        <WorkingSteps />
      </Box>
      <AssessmentTestimonialSection />
      <FAQ data={content?.homeFaq || []} />
    </Box>
  )
})

export default AssesmentPage