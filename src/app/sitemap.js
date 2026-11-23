import { doctorsData } from "@/constants/doctorDetails";
import { courses } from "@/constants/bssCourseDetails";
import { events } from "@/constants/newsEventsapi";

const BASE_URL = "https://sudhahospitals.com";

export default function sitemap() {
  const lastModified = new Date();

  // 1. Static Routes
  const staticRoutes = [
    { url: "", changeFrequency: "daily", priority: 1.0 },
    { url: "/about-us/board-of-management", changeFrequency: "monthly", priority: 0.8 },
    { url: "/about-us/gallery", changeFrequency: "monthly", priority: 0.8 },
    { url: "/about-us/why-choose-sudha-hospital", changeFrequency: "monthly", priority: 0.8 },
    { url: "/about-us/awards-and-honours", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities", changeFrequency: "weekly", priority: 0.9 },
    { url: "/specialities/centre-of-excellence", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/anaesthesiology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/cardiology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/cardiothoracic-surgery", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/dentistry-and-oral-surgery", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/dermatology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/ent", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/emergency-care", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/gastroenterology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/general-medicine", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/general-surgery", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/hepatology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/intensive-care-unit", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/imaging-and-diagnostic-services", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/laryngology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/neonatology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/nephrology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/neurology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/obstetrics-and-gynaecology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/orthopaedics", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/paediatrics", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/pain-medicine", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/plastic-surgery", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/pulmonology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/radiology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/specialities/urology", changeFrequency: "monthly", priority: 0.8 },
    { url: "/facilities/ambulance-services", changeFrequency: "monthly", priority: 0.8 },
    { url: "/facilities/health-package", changeFrequency: "monthly", priority: 0.8 },
    { url: "/facilities/insurance", changeFrequency: "monthly", priority: 0.8 },
    { url: "/facilities/laboratory", changeFrequency: "monthly", priority: 0.8 },
    { url: "/facilities/pharmacy", changeFrequency: "monthly", priority: 0.8 },
    { url: "/facilities/organ-transplant", changeFrequency: "monthly", priority: 0.8 },
    { url: "/facilities/organ-transplant/renal-transplant", changeFrequency: "monthly", priority: 0.7 },
    { url: "/facilities/organ-transplant/liver-transplant", changeFrequency: "monthly", priority: 0.7 },
    { url: "/mother-and-child-care", changeFrequency: "weekly", priority: 0.9 },
    { url: "/mother-and-child-care/painless-delivery", changeFrequency: "monthly", priority: 0.8 },
    { url: "/mother-and-child-care/post-partum-care", changeFrequency: "monthly", priority: 0.8 },
    { url: "/academics/bss-vocational-courses", changeFrequency: "monthly", priority: 0.8 },
    { url: "/academics/ethics-committee", changeFrequency: "monthly", priority: 0.7 },
    { url: "/academics/fellow-of-national-board", changeFrequency: "monthly", priority: 0.7 },
    { url: "/academics/post-mbbs-diploma-courses", changeFrequency: "monthly", priority: 0.8 },
    { url: "/academics/post-mbbs-diploma-courses/dnb-radio-diagnosis", changeFrequency: "monthly", priority: 0.7 },
    { url: "/academics/post-mbbs-diploma-courses/dnb-anaesthesiology", changeFrequency: "monthly", priority: 0.7 },
    { url: "/academics/vocational-degree-courses", changeFrequency: "monthly", priority: 0.8 },
    { url: "/resources/allied-health-services", changeFrequency: "monthly", priority: 0.8 },
    { url: "/resources/allied-health-services/dietetics", changeFrequency: "monthly", priority: 0.7 },
    { url: "/resources/allied-health-services/nursing-service", changeFrequency: "monthly", priority: 0.7 },
    { url: "/resources/allied-health-services/physiotherapy", changeFrequency: "monthly", priority: 0.7 },
    { url: "/resources/allied-health-services/psychology", changeFrequency: "monthly", priority: 0.7 },
    { url: "/resources/allied-health-services/lactation-and-maternal-health", changeFrequency: "monthly", priority: 0.7 },
    { url: "/multispecialty-hospital-karur", changeFrequency: "monthly", priority: 0.8 },
    { url: "/contact-us", changeFrequency: "monthly", priority: 0.8 },
    { url: "/find-a-doctor", changeFrequency: "weekly", priority: 0.9 },
    { url: "/careers", changeFrequency: "monthly", priority: 0.7 },
    { url: "/disclaimer", changeFrequency: "yearly", priority: 0.5 },
    { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.5 },
    { url: "/terms-and-conditions", changeFrequency: "yearly", priority: 0.5 },
    { url: "/news-and-events", changeFrequency: "weekly", priority: 0.8 },
    { url: "/bio-medical-report", changeFrequency: "monthly", priority: 0.6 },
  ].map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // 2. Dynamic Doctor Detail Routes
  const doctorRoutes = (doctorsData || [])
    .filter((doc) => doc && doc.id)
    .map((doc) => ({
      url: `${BASE_URL}/doctor-detail/${doc.id}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  // 3. Dynamic BSS Vocational Course Routes
  const courseRoutes = (courses || [])
    .filter((course) => course && course.id)
    .map((course) => ({
      url: `${BASE_URL}/academics/bss-vocational-courses/bss-course/${course.id}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  // 4. Dynamic Event Routes
  const eventRoutes = (events || [])
    .filter((event) => event && event.slug)
    .map((event) => ({
      url: `${BASE_URL}/events/${event.slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  return [...staticRoutes, ...doctorRoutes, ...courseRoutes, ...eventRoutes];
}
