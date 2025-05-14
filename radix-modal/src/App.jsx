import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>Modal com Radix UI</h1>
      
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="open-button">
            Abrir Modal
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content">
            <Dialog.Title className="dialog-title">
              Fórmula 1: História e Tecnologia
            </Dialog.Title>
            
            <div className="content-container">
              <img 
                src="/api/placeholder/600/300" 
                alt="Carro de Fórmula 1 em ação" 
                className="f1-image" 
              />
              
              <div className="dialog-description-container">
                <h3>Uma História de Velocidade e Inovação</h3>
                <Dialog.Description asChild>
                  <div className="description-text">
                    <p>
                      A Fórmula 1 teve início em 1950 e desde então se tornou o pináculo do automobilismo mundial.
                      Ao longo das décadas, vimos lendas como Ayrton Senna, Michael Schumacher, Lewis Hamilton
                      e outros deixarem sua marca neste esporte incrível.
                    </p>
                    <p>
                      Cada equipe de F1 investe milhões em pesquisa e desenvolvimento para criar os carros mais
                      rápidos possíveis dentro das regras estabelecidas pela FIA. Os motores híbridos atuais
                      combinam potência tradicional com tecnologia sustentável, produzindo mais de 1000 cavalos de potência.
                    </p>
                  </div>
                </Dialog.Description>
              </div>
            </div>
            
            <div className="dialog-footer">
              <Dialog.Close asChild>
                <button className="close-button">Fechar</button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

export default App;