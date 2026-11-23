import Karur from '@/pages/branch/karur'

export const metadata = {
  title: "Multispecialty Hospital in Karur",
  description:
    "Explore the specialities, doctors and appointment options at Sudha Multispeciality Hospital in Karur.",
  alternates: {
    canonical: "/multispecialty-hospital-karur",
  },
};

function page() {
  return (
    <div>
      <Karur />
    </div>
  )
}

export default page
