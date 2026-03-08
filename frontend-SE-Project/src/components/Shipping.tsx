import React from "react";

const Shipping: React.FC = () => {
  return (
    <section className="w-full border-t border-b py-8 bg-white">

      <div className="max-w-7xl mx-auto flex justify-between items-center text-center">

        {/* Item 1 */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🚚</span>
          <p className="tracking-widest text-sm">
            FREE NATIONWIDE SHIPPING
          </p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">👟</span>
          <p className="tracking-widest text-sm">
            100% AUTHENTIC
          </p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">💳</span>
          <p className="tracking-widest text-sm">
            CREDIT CARD & 
            <p>
            CASH ON DELIVERY ACCEPTED
            </p>
          </p>
        </div>

      </div>

    </section>
  );
};

export default Shipping;