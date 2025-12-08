<template>
  <div class="min-h-screen bg-white">
    <FloatingButton />

    <AppNav />

    <HeroSection />

    <HistorySection />

    <AboutGoldenSection />

    <OurValuesSection />

    <FaqSection />

    <ContactSection />

    <AppFooter />
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Goldens da Chácara - Criação de Golden Retrievers em Formiga, MG',
  meta: [
    {
      name: 'description',
      content: 'Criação responsável de Golden Retrievers em Formiga, Minas Gerais. Filhotes saudáveis, socializados e criados com amor.'
    },
    {
      name: 'keywords',
      content: 'golden retriever, criação golden retriever, filhotes golden, golden retriever formiga, golden retriever minas gerais, canil golden retriever'
    },
    { property: 'og:title', content: 'Goldens da Chácara - Criação de Golden Retrievers' },
    { property: 'og:description', content: 'Criação responsável de Golden Retrievers em Formiga, MG' },
    { property: 'og:type', content: 'website' }
  ]
})
</script>
