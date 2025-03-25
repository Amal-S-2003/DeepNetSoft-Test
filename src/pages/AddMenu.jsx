import React, { useState } from "react";
import { addMenu } from "../services/allAPIS";

function AddMenu() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await addMenu(formData);
      if (response.status == 200) {
        setMessage("Menu created successfully!");
        setFormData({ name: "", description: "" });
      } else {
        setMessage("Error creating menu. Try again!");
      }
    } catch (error) {
      setMessage("Error creating menu. Try again!");
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Create a New Menu</h2>

        {message && <p className="text-center text-yellow-400">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Menu Name */}
          <div>
            <label className="block font-semibold">Menu Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter menu name"
              required
              className="w-full px-4 py-2 mt-1 text-black rounded-md"
            />
          </div>

          {/* Menu Description */}
          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter menu description"
              className="w-full px-4 py-2 mt-1 text-black rounded-md"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-bold"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Menu"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMenu;
