import React from "react";

import wppIcon from '../../assets/images/icons/whatsapp.svg'
import "./styles.css";

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://ae01.alicdn.com/kf/HTB1O5y8ir3nBKNjSZFMq6yUSFXaj/Jogo-De-Tabuleiro-m-gico-NICOL-BOLAS-DEUS-FARA-mesa-mousepad-mgt-grande-esteira-do-jogo.jpg" alt="Perfil Bolas" />
                <div>
                    <strong>Nicol Bolas</strong>
                    <span>Alquimia</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet,
        <br /> <br />
        consectetur adipiscing elit. Ut aliquam vehicula finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam nisi neque, bibendum in blandit vitae, imperdiet a urna. Ut pulvinar dolor interdum dolor viverra tincidunt sit amet at diam. Pellentesque eu nulla augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis cursus nunc et nibh luctus viverra. Ut posuere neque non pulvinar vestibulum.
        </p>

            <footer>
                <p>
                    Preço/Hora
                <strong>R$80,00</strong>
                </p>
                <button type="button">
                    <img src={wppIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;