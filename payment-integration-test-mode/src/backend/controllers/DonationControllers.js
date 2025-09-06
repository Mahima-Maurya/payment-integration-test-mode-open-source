import { instance } from "../server.js";

export const checkout = async (req, res) => {
  try {
    const options = {
      amount: 50000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    console.log(order);

    res.status(200).json({
      success: true,
      order,
    });
  } catch (error) {
    console.error("❌ Razorpay Error:", error);
    res.status(500).json({
      success: false,
      message: "Order creation failed",
      error: error.message,
    });
  }
};
