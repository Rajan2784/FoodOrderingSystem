import React from "react";

const About = () => {
  return (
    <div>
      {/* This is about page */}
      <h1 className="text-center mt-10 text-2xl font-playwrite font-semibold text-green-500">
        About Us
      </h1>
      <div>
        <div>This is left section</div>
        <div>
          <p className="text-center mt-5 text-gray-600 text-lg md:text-xl">
            We are a team of foodies who love to cook and serve delicious meals
            to our customers. We are passionate about food and we believe that
            food is the best way to bring people together. Our mission is to
            provide our customers with the best dining experience possible. We
            use only the freshest ingredients and we take great care in
            preparing our meals. We are committed to providing our customers
            with the highest quality food and service. We look forward to
            serving you soon!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
