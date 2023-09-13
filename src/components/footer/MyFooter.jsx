import React from 'react';
import { CDBBtn, CDBIcon, CDBBox } from 'cdbreact';

export default function MyFooter() {
    return (
        <footer className="shadow">
          <CDBBox
              display="flex"
              justifyContent="between"
              alignItems="center"
              className="mx-auto py-4 flex-wrap"
              style={{ width: '80%'}}
          >
              <CDBBox display="flex" alignItems="center">
                  <a href="./" className="d-flex align-items-center p-0 text-dark">
                      <img
                          alt="logo"
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAAyVBMVEX///+05Pt8xu3///2Z1vQAfMe45/x3xO6w4volLEsAe8QAeccAbMAAACr8///y+fwAACBhY28AACdkvepuweqszOYAYb5ZjMqrxeEAbr8Aab8mfsUAaMHa5vKSrtvT4O6FhpCrrLPl7/bGyM0AABO4uLkAAAAGEjYPGj4aIUQADDfg3t6eoKdvcHk5PE1dXWa7z+3U7fvE5fTG2e4/iMpNg8eMjZEAABkvMkhNTl1dmtBwms4qLT3u7u4TGjghJDuZl5GKq8iEs9j9fmUdAAAD4klEQVR4nO2YW3eiShBGgQYhgrQIiu0tCDpkJI7iJcmJg3P5/z9qihYjopmHI7jWOav2i1kI9Obr6rKJICAIgiAIgiAIgiAIgiAIgiD/c4hAY0IKB0UqmPczoKLmF46tbIkWpSoUqGmiRs+Oxaqk3ksBpgAEgHzmRAJA4S4TQUyNC2irUykQWeUKzj1SIFkCoHAaLrYlKUuhagVyEhC1mnlIgZiSKp0UKp4IUzwKgILPDchHBFktVMmxBo4KJs+ASjkqrQWS9gExbxDzDFbOmUKVE3GqgWMlcAPpnAonwjxPgC+H1MspKDjVKBCoAbGIFsM3oioVU3AqmQh6kQAYiPBFcfyqJqJYA5kCrEf7ikLpE0EKyzDXEvLNoMoUPhFIC0G7JsBrobTRyfUaOFAT5OsGkqoWtxA3GJCV9kkGokg/E7AdmVxspP6tQdoN4+sxaP7FWkyxpRU9XFoSB4nVlSC0y0JUVUeG34ayAjgqcK44aHGxI0oO3ziULBCnz5Te9LIkVwUDR/Kz56eP5Qm0Ox23C/NqmgKJzxVq8lkdqM5K4HtF2nU7nXZpAkxR6oy5azMN4rw5nhvYMm8C5tplrF5XWEkK7Z7C0Zm7pOkuJR9DLd8OHBnyF2jbNXRFV+qK0itDgfibPmMsvWFdH/TX6STnFD4ygA9HhPHJuj/QYXBdNwzW3/i312NaU+ZwOdqkFkp94D6mVtqVWbDT7fuj20uHZ2wzWg7Nw+W3GhxfQiBc3YCbGyOaUzgZOLBloyMDnt/Q3XbWkYlZzqJ88cZRAp9+dwNBGNvH05L4MHBWEMDWqOts002HT6Kx91JWS7DCsPH69o8XwN9r14Aa70KL0M4MbNgydplS772v4azAW7xNWuHMKmF0mIT57IHz1GxYUwhi19ONnZkpZAa2JphwfLCDx59ajebT4ZJSFJLFl1ar0QifvsIdv86+exFUm8FcSnhfOBioskChBUCVRt73GT/zKWw0Wq0vi+Rmg2AaBMH02Ztb397CcP8Q7heRudR7rk9yGZj+ZqAvzWixDx/24eztmzX3nvmVQQkpHEmSYGr9eJ2FDSui750tTRcEN3Biuu2808hqzGbNH9Y0SHJPXvobVPJsNVuTOVkyRqEUUgNVI8xYkvmk1bSeb0/97/DVnYwXk/142N/SLAO67Q+n+8lizIev9v39ePdo3lwM3Z0PBo4d71x/0ZxH2Rn3+m9S5L0G7igWZUcb7YJXL7rTuEf4ZMx/jpaibC9HP+dJ1eF/QvTyK5bbv17u/fw5kulv+fe06vL/C/CCHLWjMn6BEQRBEARBEARBEARBEARBkP8IfwDLdE/CIVqQxAAAAABJRU5ErkJggg=="
                          width="100px"
                      />
                      <span className="ms-4 h5 mb-0 font-weight-bold">EpiBooks!</span>
                  </a>
              </CDBBox>
              <CDBBox>
                  <small className="ms-2">&copy; EpiBooks!, 2023. All rights reserved.</small>
              </CDBBox>
              <CDBBox display="flex">
                  <CDBBtn flat color="dark" className="p-2">
                      <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="mx-3 p-2">
                      <CDBIcon fab icon="twitter" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2">
                      <CDBIcon fab icon="instagram" />
                  </CDBBtn>
              </CDBBox>
          </CDBBox>
        </footer>
    )
}
