function BrandCards1() {
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
              src="/images/NetherBindLogo2.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full pl-25 pr-25 items-center justify-center text-lg font-raleway text-center px-4">
                For over 25 generations, NetherBind Press has been the world’s
                trusted name in the sourcing, restoring, and distributing
                enchanted literature. Their vast archives and elven-certified
                sourcing guild ensure every text is authentic, protected, and
                ready for study.
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
              src="/images/IceHolmJewlersLogo.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full items-center pl-25 pr-25 justify-center text-lg font-raleway text-center px-4">
                IceHolm Jewelers combines the ancient craftsmanship of their
                Norse ancestors with the chilling beauty of ice magic. Each
                piece glitters and glows in the light of the sun & is guaranteed
                to hold the first frost of winter for generations
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
              src="/images/AuDAetherLogo.png"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div className="flex h-full w-full items-center pl-25 pr-25 justify-center text-lg font-raleway text-center px-4">
                Au d’Aether is the gold standard in magical refinement. A
                premier house of arcane jewelry. Known for their mana-enhancing
                gemstones, Au d’Aether designs pieces that don’t just adorn,
                they elevate.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandCards1;
