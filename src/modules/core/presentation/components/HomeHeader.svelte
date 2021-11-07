<script>
  import logo from '../../../../assets/svelte.png'
  export let msg
</script>

<div>
  <img src={logo} alt="Svelte Logo" />
  <h1>{ msg }</h1>
</div>

<style>
  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  /* p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  } */

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    /* p {
      max-width: none;
    } */
  }
</style>