function BrandCards3() {
  return (
    <>
      <div className="w-32 flex-1">
        <div className="block rounded-lg bg-gray-50 hover:bg-gray-200 transition-colors duration-300 shadow-secondary-1 dark:bg-surface-dark">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img className="rounded-t-lg" src="/images/BericoLogo.png" alt="" />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full pl-25 pr-25 items-center justify-center text-lg font-raleway text-center px-4">
                A name spoken quietly in the corners of courtrooms and thieves’
                guilds alike, Berico & Söhne has long been the outfitter of
                choice for those who prefer to remain unseen. Founded in the
                shadowed streets of Vienna, this family-run house crafts
                garments and tools of illusion, misdirection, and silence,
                tailored with care and enchanted with the subtlest of spells.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-32 flex-1">
        <div className="block rounded-lg bg-gray-50 hover:bg-gray-200 transition-colors duration-300 shadow-secondary-1 dark:bg-surface-dark">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src="/images/LamiaApparelLogo.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full pl-25 pr-25 items-center justify-center text-lg font-raleway text-center px-4">
                With roots in the leatherwork guilds of Ancient Thessaly, Lamia
                Apparel continues to dress warriors and wanderers in armor born
                of beast and legend. Specializing in scaled leathers, draconic
                hides, and enchanted reptilian plating, each piece is as much a
                testament to ancient myth as it is to modern utility.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-32 flex-1">
        <div className="block rounded-lg bg-gray-50 hover:bg-gray-200 transition-colors duration-300 shadow-secondary-1 dark:bg-surface-dark">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src="/images/HermesActiveLogo.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full pl-25 pr-25 items-center justify-center text-lg font-raleway text-center px-4">
                Founded in Athens, Hermes Armor and Activewear has long been
                known for forging unbreakable magical armors for warriors and
                adventurers alike. Today, they’re proud to offer their
                cutting-edge activewear, where advanced spellcraft meets
                next-level performance. From enchanted endurance fabrics to
                lightweight, motion-enhancing enchantments, Hermes now outfits
                athletes, casters, and wanderers who need both protection and
                freedom.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandCards3;
