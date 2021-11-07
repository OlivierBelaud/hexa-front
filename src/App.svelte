<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from './modules/core/presentation/pages/Home.svelte'
  import Page1 from './modules/core/presentation/pages/Page1.svelte'
  export let url = "";
  
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to="page1">Page1</Link>
  </nav>
  <main>
    <Route path="page1" component="{Page1}" /> 
    <!--for now the router just support case sensitive,
        one workaround colud be add two time the route
        Example.
      <Route path="About" component="{About}" /> 
    -->
    <Route path="/"><Home /></Route>
  </main>
</Router>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  /* img {
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

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  } */
</style>
