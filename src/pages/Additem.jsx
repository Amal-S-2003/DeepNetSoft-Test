import React, { useEffect, useState } from "react";
import { addItem, viewMenus } from "../services/allAPIS";

function Additem() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    menu: "",
  });

  const [menus, setMenus] = useState([]); // Store menus for dropdown
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fetch menus from API
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await viewMenus();
        console.log(response);
        
        if (response.status == 200) {
          setMenus(response.data);
        }
      } catch (error) {
        console.error("Error fetching menus", error);
      }
    };

    fetchMenus();
  }, []);

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
      const response = await addItem(formData);
      if (response.status == 200) {
        setMessage("Item added successfully!");
        setFormData({ name: "", description: "", price: "", menu: "" });
      } else {
        setMessage("Error adding item. Try again!");
      }
    } catch (error) {
      setMessage("Error adding item. Try again!");
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-10 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Item</h2>

        {message && <p className="text-center text-yellow-400">{message}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Item Name */}
          <div>
            <label className="block font-semibold">Item Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter item name"
              required
              className="w-full px-4 py-2 mt-1 text-black rounded-md"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter item description"
              className="w-full px-4 py-2 mt-1 text-black rounded-md"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold">Price ($)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter price"
              required
              className="w-full px-4 py-2 mt-1 text-black rounded-md"
            />
          </div>

          {/* Select Menu Dropdown */}
          <div>
            <label className="block font-semibold">Select Menu</label>
            <select
              name="menu"
              value={formData.menu}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 text-black rounded-md"
            >
              <option value="">Select a Menu</option>
              {menus.map((menu) => (
                <option key={menu.name} value={menu.name}>
                  {menu.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-bold"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Additem;
