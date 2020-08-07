import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                            <img src="https://pbs.twimg.com/profile_images/1290509194039373824/G2iq9X9q_400x400.jpg" alt="Marcelo Santos"/>
                            <div>
                            <strong>Marcelo Santos</strong>
                            <span>Nutrição</span>
                            </div>
                    </header>

                    <p>
                        Apaixonado por todos os benefícios de uma vida saudável graças a dieta e exercícios fisícos.
                        <br/> <br/>
                        Mostrando de forma clara e didática que a tese funciona na prática.
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 45,00</strong>
                        </p>
                        <button type="button"><img src={whatsappIcon} alt="whatsapp"/>
                        Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;