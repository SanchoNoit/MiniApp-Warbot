<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <font-awesome-icon
          :icon="['fas', 'jet-fighter']"
          style="color: #f5c211"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="conversor"
              >Conversor pulgadas</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="listaPartida"
              >Lista de la Partida</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link active" to="battlingSouls"
              ><font-awesome-icon :icon="['fas', 'khanda']" />BattlingSouls
            </RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Enlaces
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Enlace 1</a></li>
              <li><a class="dropdown-item" href="#">Enlace 2</a></li>
              <li><a class="dropdown-item" href="#">Enlace 3</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Otro enlace aquí</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success"
            type="submit"
            id="botonBusqueda"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>
