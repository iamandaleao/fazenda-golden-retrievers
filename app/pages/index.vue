<template>
  <div class="min-h-screen bg-white">
    <!-- WhatsApp Floating Button -->
    <button
      class="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Contato via WhatsApp"
      @click="handleWhatsAppClick"
    >
      <MessageCircle :size="28" />
    </button>

    <AppNav />

    <HeroSection />

    <HistorySection />

    <AboutGoldenSection />

    <OurValuesSection />

    <!-- FAQ -->
    <section class="py-12 sm:py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 sm:mb-12">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <div class="w-20 h-1 bg-amber-600 mx-auto" />
        </div>
        <div class="space-y-4 sm:space-y-6">
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Quando terão filhotes disponíveis?
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Estamos atualmente na fase de aquisição dos matrizes. Prevemos nossa primeira ninhada
              para os próximos meses. Entre em contato pelo WhatsApp para receber atualizações!
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Qual o valor estimado dos filhotes?
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Os valores serão divulgados assim que tivermos os matrizes definidos e toda a estrutura pronta.
              Trabalhamos com preços justos que refletem a qualidade e cuidados oferecidos.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Fazem reservas antecipadas?
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Sim! Você pode manifestar interesse agora pelo WhatsApp e quando a ninhada for confirmada,
              entraremos em contato para formalizar a reserva.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Que documentação será fornecida?
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Todos os filhotes sairão com carteira de vacinação, vermifugação em dia, microchip,
              contrato de compra e venda, e orientações completas de cuidados.
            </p>
          </div>
          <div class="bg-white p-5 sm:p-6 rounded-xl shadow-sm">
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">
              Oferecem suporte pós-adoção?
            </h3>
            <p class="text-sm sm:text-base text-gray-600">
              Sim! Estaremos sempre disponíveis para orientar sobre alimentação, saúde, comportamento
              e quaisquer dúvidas que surgirem ao longo da vida do seu Golden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section
      id="contato"
      class="py-12 sm:py-16 bg-gradient-to-br from-amber-500 to-orange-500 text-white"
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
          @click="handleWhatsAppClick"
        >
          <MessageCircle :size="20" />
          Falar no WhatsApp
        </button>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<script setup>
import { MessageCircle } from 'lucide-vue-next'

// Configuração do WhatsApp
// IMPORTANTE: Substitua pelo seu número real no formato: 5537999999999
const whatsappNumber = '5537999999999'
const whatsappMessage = 'Olá! Tenho interesse nos filhotes de Golden Retriever 🐕'

const handleWhatsAppClick = () => {
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
  window.open(url, '_blank')
}

// SEO
useHead({
  title: 'Fazenda dos Goldens - Criação de Golden Retrievers em Formiga, MG',
  meta: [
    {
      name: 'description',
      content: 'Criação responsável de Golden Retrievers em Formiga, Minas Gerais. Filhotes saudáveis, socializados e criados com amor.'
    },
    {
      name: 'keywords',
      content: 'golden retriever, criação golden retriever, filhotes golden, golden retriever formiga, golden retriever minas gerais, canil golden retriever'
    },
    { property: 'og:title', content: 'Fazenda dos Goldens - Criação de Golden Retrievers' },
    { property: 'og:description', content: 'Criação responsável de Golden Retrievers em Formiga, MG' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
