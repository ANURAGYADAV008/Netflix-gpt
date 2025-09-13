const Footer = () => {
  return (
    <div className="bg-black text-gray-400 px-6 py-12 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Company</h3>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Jobs</a>
          <a href="#" className="hover:underline">Press</a>
          <a href="#" className="hover:underline">Blog</a>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Help Center</h3>
          <a href="#" className="hover:underline">FAQ</a>
          <a href="#" className="hover:underline">Account</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Legal</h3>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Cookie Preferences</a>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-white font-semibold mb-2">Follow Us</h3>
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Twitter</a>
          <a href="#" className="hover:underline">Instagram</a>
        </div>
      </div>

      <p className="text-gray-500 text-sm mt-8 text-center">
        © 2025 Netflix, Inc.
      </p>
    </div>
  )
}

export default Footer
