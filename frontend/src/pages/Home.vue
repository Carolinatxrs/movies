<template>
  <main>
    <section class="container">
      <h1>Filmes adicionados</h1>
      <section class="filmes">
        <div v-for="(filme,index) in filmes" class="filme" :key="index">
          <div>
            <!-- <a :href="filme.autor"> -->
            <img :src="url + filme.imagem" :alt="filme.titulo">
            <div class="filme-title">{{ filme.titulo }}</div>
            <!-- </a> -->
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<script>

// import { response } from 'express';
import Filmes from '../services/filmes';

export default{
  name:'Home',
  data(){
    return{
      filmes: []
    }
  },
  mounted(){
    Filmes.listar().then(response => {
      this.filmes = response.data;
      this.url = 'http://localhost:3000/files/';
      console.log(response.data);
    });
  }
};
</script>

<style scoped>
main{
  background-color: var(--color-background-home);
  justify-content: center;
  align-items: center;
}

.filmes{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.filme{
  width: 80%;
}
.filme img{
  width: 100%;
  margin-top: 0;
  margin-top: 10px;
  box-shadow: rgb(203 72 40 / 35%) 0px 5px 15px;
}

.filme div{
  color: var(--color-text-dark);
  font-weight: 600;
  text-align: center;
}

.filme-title{
  margin: 15px 10px;
}

@media (min-width: 700px){
  .filmes{
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .filme{
    margin-right: 30px;
    width: 200px;
  }
}
</style>