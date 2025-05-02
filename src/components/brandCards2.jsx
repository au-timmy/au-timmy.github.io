function BrandCards2() {
  return (
    <>
      <div className="w-32 flex-1">
        <div className="block rounded-lg bg-gray-50 hover:bg-gray-200 transition-colors duration-300 shadow-secondary-1 dark:bg-surface-dark">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img
              className="rounded-t-lg"
              src="/images/CelestialSanctumsLogo.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full pl-25 pr-25 items-center justify-center text-lg font-raleway text-center px-4">
                A constellation of craft and arcane engineering, Celestial
                Sanctums creates gear that channels the movements of the heavens
                themselves. Each piece is a feat of celestial alignment and
                magical precision millennia in the making.
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
              src="/images/MajestyLogo2.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full pl-25 pr-25 items-center justify-center text-lg font-raleway text-center px-4">
                Founded in the hallowed halls of Old Camelot, Majesty Arcana
                carries the legacy of Arthurian grandeur into every stitch of
                fabric and line of enchantment. Known for crafting gear worn by
                guild elites, archducal champions, and legendary quest-takers,
                their creations are more than items, they are status made
                manifest.
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
              src="/images/StoneHeartArmoriesLogo.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full pl-25 pr-25 items-center justify-center text-lg font-raleway text-center px-4">
                Forged beneath the towers of Burg Hohenzollern, StoneHeart
                Armory is the trusted name in high-grade magical armament for
                frontline professionals. Their weapons and armor are the choice
                of tanks, guardians, and steadfast defenders across the realms,
                built to withstand siege, spell, and time alike.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandCards2;
