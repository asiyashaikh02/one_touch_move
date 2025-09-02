// // import { Link } from "react-router-dom";
// // import PhysioSlider from "./PhysioSlider";
// // export default function Homepage() {
// //   return (
// //     <div className="bg-gray-100 min-h-screen">
// //       {/* Navbar */}
// //       <nav className="bg-white shadow-md">
// //         <div className="container mx-auto flex justify-between items-center py-4 px-6">
// //         <Link to="/" className="flex items-center space-x-3">
// //           <img
// //             src="/images/logo1.jpeg" // Make sure the logo is in /public/images/logo.png
// //             alt="One Touch Move Logo"
// //             className="h-12 w-12 object-contain"
// //           />
// //           <span className="text-2xl font-bold text-black-600">One Touch Move</span>
// //         </Link>
// //           <ul className="flex space-x-6">
// //             <li>
// //               <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
// //             </li>
// //             <li>
// //               <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
// //             </li>
// //             <li>
// //               <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
// //             </li>
// //             <li>
// //               <Link to="/register-physio" className="text-gray-700 hover:text-blue-600">Register Physio</Link>
// //                </li>  

// //             <li>
// //               <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
// //             </li>
// //             <li>
// //               <Link to="/signup" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
// //                 Sign Up
// //               </Link>
// //             </li>
// //           </ul>
// //         </div>
// //       </nav>

// //       {/* Hero Section */}
// //       <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
// //         {/* Left: Text Content */}
// //         <div className="md:w-1/2 text-center md:text-left">
// //           <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
// //             Professional Physiotherapy at Your Convenience
// //           </h1>
// //           <p className="mt-4 text-gray-600">
// //             Get expert physiotherapy services at your **clinic, home, or online** with our
// //             experienced professionals.
// //           </p>
// //           <Link
// //             to="/book"
// //             className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
// //           >
// //             Book an Appointment
// //           </Link>
// //         </div>

// //         {/* Right: Hero Image */}
// //         <div className="md:w-1/2 mt-6 md:mt-0">
// //           <img
// //             src="/images/hero image.jpeg"
// //             alt="Physiotherapy Session"
// //             className="w-full rounded-lg shadow-md"
// //           />
// //         </div>
// //       </section>

// //       {/* Feature Section */}
// //       <section className="container mx-auto px-6 py-12">
// //         <h2 className="text-3xl font-bold text-center text-gray-800">
// //           Our Services
// //         </h2>
// //         <p className="text-center text-gray-600 mt-2">
// //           Choose the best physiotherapy service for your needs.
// //         </p>

// //         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
// //           {/* Clinic Visit */}
// //           <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //             <img
// //               src="/images/ClinicVisit.jpg"
// //               alt="Clinic Visit"
// //               className="w-full h-48 object-cover rounded-md"
// //             />
// //             <h3 className="text-xl font-semibold text-gray-800 mt-4">
// //               Clinic Visit
// //             </h3>
// //             <p className="text-gray-600 mt-2">Visit our expert physiotherapists at our clinic.</p>
// //             <Link
// //               to="/book"
// //               className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
// //             >
// //               Book Now
// //             </Link>
// //           </div>

// //           {/* Home Visit */}
// //           <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //             <img
// //               src="/images/HomeVisit.jpg"
// //               alt="Home Visit"
// //               className="w-full h-48 object-cover rounded-md"
// //             />
// //             <h3 className="text-xl font-semibold text-gray-800 mt-4">
// //               Home Visit
// //             </h3>
// //             <p className="text-gray-600 mt-2">Get personalized care at your home.</p>
// //             <Link
// //               to="/book"
// //               className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
// //             >
// //               Book Now
// //             </Link>
// //           </div>

// //           {/* Digital Physio Session */}
// //           <div className="bg-white p-6 rounded-lg shadow-md text-center">
// //             <img
// //               src="/images/digitalphiso.jpg"
// //               alt="Digital Session"
// //               className="w-full h-48 object-cover rounded-md"
// //             />
// //             <h3 className="text-xl font-semibold text-gray-800 mt-4">
// //               Digital Physio Session
// //             </h3>
// //             <p className="text-gray-600 mt-2">Consult our specialists online anytime.</p>
// //             <Link
// //               to="/book"
// //               className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
// //             >
// //               Book Now
// //             </Link>
// //           </div>
// //         </div>
// //       </section>
// //       <PhysioSlider />

// //     </div>
// //   );
// // }
// import { Link } from "react-router-dom";
// import PhysioSlider from "./PhysioSlider";

// export default function Homepage() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <Link to="/" className="flex items-center space-x-3">
//             <img
//               src="/images/logo1.jpeg"
//               alt="One Touch Move Logo"
//               className="h-12 w-12 object-contain"
//             />
//             <span className="text-2xl font-bold text-black-600">One Touch Move</span>
//           </Link>
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
//             <li><Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link></li>
//             <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
//             <li><Link to="/register-physio" className="text-gray-700 hover:text-blue-600">Register Physio</Link></li>
//             <li><Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link></li>
//             <li>
//               <Link to="/signup" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
//         {/* Left: Text Content */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
//             Professional Physiotherapy at Your Convenience
//           </h1>
//           <p className="mt-4 text-gray-600">
//             Get expert physiotherapy services at your **clinic, home, or online** with our experienced professionals.
//           </p>
//           <Link
//             to="/book"
//             className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
//           >
//             Book an Appointment
//           </Link>
//         </div>

//         {/* Right: Hero Image */}
//         <div className="md:w-1/2 mt-6 md:mt-0">
//           <img
//             src="/images/hero-image.jpeg"
//             alt="Physiotherapy Session"
//             className="w-full rounded-lg shadow-md"
//           />
//         </div>
//       </section>

//       {/* Feature Section */}
//       <section className="container mx-auto px-6 py-12">
//         <h2 className="text-3xl font-bold text-center text-gray-800">
//           Our Services
//         </h2>
//         <p className="text-center text-gray-600 mt-2">
//           Choose the best physiotherapy service for your needs.
//         </p>

//         <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Clinic Visit */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <img
//               src="/images/ClinicVisit.jpg"
//               alt="Clinic Visit"
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="text-xl font-semibold text-gray-800 mt-4">Clinic Visit</h3>
//             <p className="text-gray-600 mt-2">Visit our expert physiotherapists at our clinic.</p>
//             <Link
//               to="/book"
//               className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Home Visit */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <img
//               src="/images/HomeVisit.jpg"
//               alt="Home Visit"
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="text-xl font-semibold text-gray-800 mt-4">Home Visit</h3>
//             <p className="text-gray-600 mt-2">Get personalized care at your home.</p>
//             <Link
//               to="/book"
//               className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Digital Physio Session */}
//           <div className="bg-white p-6 rounded-lg shadow-md text-center">
//             <img
//               src="/images/digitalphiso.jpg"
//               alt="Digital Session"
//               className="w-full h-48 object-cover rounded-md"
//             />
//             <h3 className="text-xl font-semibold text-gray-800 mt-4">Digital Physio Session</h3>
//             <p className="text-gray-600 mt-2">Consult our specialists online anytime.</p>
//             <Link
//               to="/book"
//               className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>
//       </section>

//       <PhysioSlider />
//     </div>
//   );
// }


import { Link } from "react-router-dom";
import PhysioSlider from "./PhysioSlider";

export default function Homepage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <Link to="/" className="flex items-center space-x-3">

            <img
              src={`${import.meta.env.BASE_URL}images/logo1.jpeg`}
              alt="One Touch Move Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-black-600">One Touch Move</span>
          </Link>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
            <li><Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link></li>
            <li><Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
            <li><Link to="/register-physio" className="text-gray-700 hover:text-blue-600">Register Physio</Link></li>
            <li><Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link></li>
            <li>
              <Link to="/signup" className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Professional Physiotherapy at Your Convenience
          </h1>
          <p className="mt-4 text-gray-600">
            Get expert physiotherapy services at your **clinic, home, or online** with our experienced professionals.
          </p>
          <Link to="/book" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Book an Appointment
          </Link>
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <img src={`${import.meta.env.BASE_URL}images/hero-image.jpeg`} alt="Physiotherapy Session" className="w-full rounded-lg shadow-md"/>
        </div>
      </section>

      {/* Feature Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
        <p className="text-center text-gray-600 mt-2">Choose the best physiotherapy service for your needs.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={`${import.meta.env.BASE_URL}images/ClinicVisit.jpg`} alt="Clinic Visit" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Clinic Visit</h3>
            <p className="text-gray-600 mt-2">Visit our expert physiotherapists at our clinic.</p>
            <Link to="/book" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Book Now</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={`${import.meta.env.BASE_URL}images/HomeVisit.jpg`} alt="Home Visit" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Home Visit</h3>
            <p className="text-gray-600 mt-2">Get personalized care at your home.</p>
            <Link to="/book" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Book Now</Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img src={`${import.meta.env.BASE_URL}images/digitalphiso.jpg`} alt="Digital Session" className="w-full h-48 object-cover rounded-md"/>
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Digital Physio Session</h3>
            <p className="text-gray-600 mt-2">Consult our specialists online anytime.</p>
            <Link to="/book" className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Book Now</Link>
          </div>
        </div>
      </section>

      <PhysioSlider />
    </div>
  );
}

