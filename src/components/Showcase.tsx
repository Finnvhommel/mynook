export default function Showcase() {
  return (
    <section className="py-24 bg-paper overflow-hidden">
      {/* Container breed houden */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
        
        {/* Screenshot 1 */}
        <img 
          src="/mockup-timer.png" 
          alt="MyNook Timer" 
          // AANPASSING: 
          // - w-full: pakt de volle breedte op mobiel
          // - md:w-[45%]: op desktop pakken ze elk bijna de helft van het scherm
          // - max-w-[550px]: ze worden nooit breder dan 550px (zodat ze scherp blijven)
          className="w-full md:w-[45%] max-w-[550px] h-auto drop-shadow-2xl rounded-[2.5rem]" 
        />

        {/* Screenshot 2 */}
        <img 
          src="/mockup-history.png" 
          alt="MyNook Geschiedenis" 
          className="w-full md:w-[45%] max-w-[550px] h-auto drop-shadow-2xl rounded-[2.5rem]" 
        />

      </div>
    </section>
  );
}