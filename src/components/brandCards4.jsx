function BrandCards4() {
  return (
    <>
      <div className="w-32 flex-1">
        <div className="block rounded-lg bg-gray-50 hover:bg-gray-200 transition-colors duration-300 shadow-secondary-1 dark:bg-surface-dark">
          <div
            className="relative overflow-hidden bg-cover bg-no-repeat"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            <img class="rounded-t-lg" src="/images/VItaGlowLogo.png" alt="" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div class="flex h-full w-full items-center pl-25 pr-25 justify-center text-lg font-raleway">
                Hailing from the misty alleys of Veneto’s arcane quarter, the
                artisans at VitalGlow Charms have illuminated the magical world
                for centuries. Each piece is hand-enchanted in small batches,
                carrying the unmistakable warmth of Italian spellcraft: subtle,
                practical, and always beautiful in its simplicity.
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
              src="/images/HiroshiArcanaLogo.png"
              alt=""
            />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div class="flex h-full w-full items-center pl-25 pr-25 justify-center text-lg font-raleway">
                Founded in the shadow of Mount Atago, Hiroshi Arcana is renowned
                for fusing traditional Japanese precision with arcane mastery.
                Each staff, scroll, and cloak is crafted with quiet discipline
                and deep respect for the old magics, refined through generations
                of enchanters and spellwrights.
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
            <img class="rounded-t-lg" src="/images/IgnisLogo.png" alt="" />
            <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,100%,0.9)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <div class="flex h-full w-full items-center pl-25 pr-25 justify-center text-lg font-raleway">
                Born deep beneath the molten veins of their volcanic home, IGNIS
                Forgeworks is a proud dwarven-run manufacturer specializing in
                affordable, reliable, and battle-tested fire magic systems.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandCards4;
