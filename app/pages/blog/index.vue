<template>
  <section class="pt-24 pb-16 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-amber-700 mb-3">
        🐕 Blog dos Goldens da Chácara
      </h1>
      <p class="text-gray-600 text-lg">
        Dicas, histórias e cuidados com nossos amigos de quatro patas
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
      <article
        v-for="post in formattedPosts"
        :key="post.slug"
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-amber-100"
      >
        <img 
          :src="post.image" 
          :alt="post.title"
          class="w-full h-64 md:h-72 lg:h-80 object-cover object-center bg-gray-100"
        />
        
        <div class="p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-3 hover:text-amber-600 transition">
            {{ post.title }}
          </h2>
          
          <p class="text-gray-600 mb-4 leading-relaxed">
            {{ post.excerpt }}
          </p>

          <NuxtLink
            :to="`/blog/${post.slug}`"
            class="inline-block px-6 py-2.5 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition"
          >
            Ler artigo completo →
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
// Busca todos os posts da pasta content/blog/
const { data: posts } = await useAsyncData('blog-posts', () => 
  queryContent('blog').find()
)

// Transforma os posts para ter a propriedade slug
const formattedPosts = computed(() => {
  if (!posts.value) return []
  
  return posts.value.map(post => ({
    ...post,
    slug: post._path.replace('/blog/', '')
  }))
})
</script>