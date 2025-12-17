<template>
  <!-- Call to Action -->
  <section
    id="contato"
    class="py-12 sm:py-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white scroll-mt-4"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
        Quer Saber Mais?
      </h2>
      <p class="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
        Entre em contato conosco pelo WhatsApp e manifeste seu interesse.
        Teremos prazer em conversar com você!
      </p>
      <button
        class="bg-white text-amber-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center gap-2 text-base sm:text-lg"
        @click="openWhatsapp"
      >
        <MessageCircle :size="20" />
        Falar no WhatsApp
      </button>
    </div>
  </section>
</template>
