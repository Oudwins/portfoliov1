<template>
  <div class="contact">
    <div class="form">
      <h2>Contacto</h2>
      <form name="contact-form" method="POST" action="https://formspree.io/xrgywnqe">
        <!-- row 1 name + phone number 50% each -->
        <div class="row">
          <input type="text" name="name" id="name" placeholder="Nombre" />

          <input type="text" name="phone" id="phone" placeholder="Teléfono" />
        </div>
        <!-- email -->

        <input type="email" name="_replyto" id="email" placeholder="Email" />

        <!-- Pagina Web -->
        <input type="text" name="web" id="web" placeholder="Página Web" />

        <!-- asunto + caja de texto -->

        <input type="text" name="_subject" id="asunto" placeholder="Asunto" />

        <textarea
          name="message"
          id="mensaje"
          cols="30"
          rows="10"
          placeholder="¿Cómo te puedo ayudar?"
        ></textarea>
        <!-- redirect user -->
        <input type="hidden" name="_next" value="www.tristanmayo.com/" />
        <button class="btn btn-outline">Enviar</button>
      </form>
    </div>
  </div>
</template>
<script>
/*       <form
        name="portfolio-contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="portfolio-contact" />
        <!-- row 1 name + phone number 50% each -->
        <div class="row">
          <input type="text" name="name" id="name" placeholder="Nombre" />
          <input type="text" name="phone" id="name" placeholder="Teléfono" />
        </div>
        <!-- email -->
        <input type="email" name="email" id="email" placeholder="Email" />

        <!-- Pagina Web -->
        <input type="text" name="web" id placeholder="Página Web" />
        <!-- asunto + caja de texto -->
        <input type="text" name="subject" id placeholder="Asunto" />
        <textarea name="message" id cols="30" rows="10" placeholder="¿Cómo te puedo ayudar?"></textarea>
        <button type="submit" class="btn btn-outline">Enviar</button>
      </form> */
export default {};
</script>

<style lang="scss">
.contact {
  padding: $spacer4 0;
  button {
    cursor: pointer;
    margin: $spacer auto;
    width: 90%;
  }
}
/* Mobile First */
.form {
  margin: 0 auto;
  padding-top: $spacer;
  /* @include box_shadow; */
  form {
    @include flex_center;
    flex-direction: column;

    /*     > input,
    > textarea {
      min-width: 50%;
    } */
  }
  input,
  textarea {
    width: 90%;
    @include box_shadow_light;
    margin: $spacer0 0;
    padding: $spacer0;
    border: 0;
    border-radius: 10px;
    transition: box-shadow 250ms ease-in-out;
  }

  input:focus,
  textarea:focus {
    outline: none;
    @include box_shadow_light_focus;
  }
}

.row {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media all and (min-width: 768px) {
  .contact {
    padding: $spacer4;
    button {
      width: auto;
      padding: 0.8rem 6rem;
    }
    h2 {
      margin-bottom: $spacer3;
    }
  }
  /* Mobile First */
  .form {
    @include box_shadow;
    padding: $spacer4;
    margin: $spacer auto;
    max-width: 90%;
    form {
      > input,
      > textarea {
        min-width: 50%;
      }
    }
    input,
    textarea {
      @include box_shadow_light;
      padding: 0.8rem $spacer0;
    }
  }

  .row {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    > input {
      width: 48%;
    }
  }
}
</style>