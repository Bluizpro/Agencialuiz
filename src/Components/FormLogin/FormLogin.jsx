export default () => {
    return (
        <main class="container">
            <div class="textLogin">
                <h2>Login</h2>
            </div>
            <section class="row ">
                <div class="col-md-12 col-lg-6">
                    <div class="divLogin">
                        <form action="">
                            <div class="my-2">
                                <label class="form-label">Nome</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Nome" />
                            </div>
                            <div class="my-2">
                                <label class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Senha</label>
                                <input type="password" class="form-control" id="exampleFormControlInput1"
                                    placeholder="Senha" />
                            </div>
                            <div class="text-center">
                                <button type="submit" class="btn btnContato mb-5">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="slogan container-fluid">
                        <div>
                            <h2>Venha para agencia Bluiz e vai sempre viver feliz!!!</h2>
                      
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}