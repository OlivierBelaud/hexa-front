<script>
  import logo from '../../../../assets/svelte_logo.png'
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

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>