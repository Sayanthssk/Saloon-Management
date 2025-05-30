import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Offers() {
  const [services, setServices] = useState([]); // State to store services
  const [loading, setLoading] = useState(true); // Loading state
  const [selectedService, setSelectedService] = useState(""); // State for selected service
  const [offerDetails, setOfferDetails] = useState({
    discountPercentage: "",
    startDate: "",
    endDate: "",
  }); // State for offer details
  const salonId = localStorage.getItem("salonobjectid"); // Retrieve salon ID from localStorage
  console.log(salonId);
  const navigate = useNavigate()
  

  useEffect(() => {
    // Fetch services from the API
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/viewsalondata/${salonId}`
        );
        console.log(response);
        
       
          setServices(response.data.data.services);
      
        setLoading(false);
      } catch (err) {
        console.error("Error fetching services:", err);
        setLoading(false);
      }
    };

    fetchServices();
  }, [salonId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOfferDetails({ ...offerDetails, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    try {
      const selectedServiceId = services.find(
        (service) => service.name === selectedService
      )._id; // Find the service ID
      console.log(selectedServiceId);
      
      const response = await axios.post(
        `http://localhost:8000/salons/${salonId}/services/${selectedServiceId}/offers`,
        offerDetails
      );
      console.log("Offer added successfully:", response.data);
      alert("Offer added successfully!");
      navigate('/notification')
    } catch (err) {
      console.error("Error adding offer:", err);
      alert("Failed to add offer. Please try again.");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* Navbar */}
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://png.pngtree.com/png-clipart/20220502/original/pngtree-salon-logo-png-image_7649789.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
            Add Offers
          </a>
        </div>
      </nav>

      {/* Add Offers Form */}
      <div className="container mt-4">
        <div className="card p-4 shadow-sm">
          <h2 className="text-center mb-4">Add an Offer</h2>
          <form onSubmit={handleSubmit}>
            {/* Dropdown for services */}
            <div className="mb-3">
              <label htmlFor="service" className="form-label">
                Select Service
              </label>
              <select
                id="service"
                className="form-select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a Service
                </option>
                {services.map((service) => (
                  <option key={service._id} value={service.name}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Input fields for offer details */}
            <div className="mb-3">
              <label htmlFor="discountPercentage" className="form-label">
                Discount Percentage
              </label>
              <input
                type="number"
                id="discountPercentage"
                name="discountPercentage"
                className="form-control"
                value={offerDetails.discountPercentage}
                onChange={handleInputChange}
                placeholder="Enter discount percentage"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="startDate" className="form-label">
                Starting Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                className="form-control"
                value={offerDetails.startDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="endDate" className="form-label">
                Ending Date
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                className="form-control"
                value={offerDetails.endDate}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit button */}
            <button type="submit" className="btn btn-primary w-100">
              Add Offer
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Offers;

