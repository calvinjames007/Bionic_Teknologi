<script>

</script>

<template>
  <main>
    <div class="main-screen">
      <div class="first-screen">
        <p>1</p>
      </div>

      <div class="second-middle-screen">
        <div class="second-screen">
          <p>2</p>
        </div>
        <div class="third-screen">
          <p>3</p>
        </div>
      </div> 

      <div class="third-middle-screen">
        <div class="fourth-middle">
          <div class="fourth-class">
            <p>4</p>
          </div>
          <div class="fourth-hell">
            <div class="fourth-five">
              <p>5</p>
            </div>
            <div class="fourth-five">
              <p>6</p>
            </div>
            <div class="fourth-five">
              <p>7</p>
            </div>
          </div>
        </div>

        <div class="fifth-middle">
          <div class="fifth-box">
            <p>7</p>
          </div>
          <div class="fifth-box">
            <p>8</p>
          </div>
          <div class="fifth-box">
            <p>9</p>
          </div>
        </div>
      </div>

      <div class="sixth-middle">
          <div class="sixth-class">
            <p>10</p>
          </div>
      </div>
    </div>
  </main>
</template>

<style>
.main-screen {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: gray;
}

.first-screen {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
  margin: 50px 50px 10px 50px;
  background-color: red;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.second-middle-screen {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10%;
  margin: 10px 50px 10px 50px;
  background-color:black;
}

.second-screen {
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.third-screen {
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.third-middle-screen {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  margin: 10px 50px 10px 50px;
  background-color:black;
}

.fourth-middle {
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.fourth-hell {
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: space-between;
  background-color: blue;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.fourth-class {
  display: flex;
  width: 80%;
  height: 80%;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background-color: red;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.fourth-five {
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.fifth-middle {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
  background-color: blue;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.fifth-box {
  display: flex;
  width: 80%;
  height: 25%;
  margin: 10px;
  align-items: center;
  justify-content: center;
  background-color: red;
  border: 2px solid black;
  outline-style: solid;
  outline-color: black;
}

.sixth-middle {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50%;
  margin: 10px 50px 10px 50px;
  background-color:black;
}

@media (max-width: 700px) {
  .third-middle-screen {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: flex-start;
    background-color: aqua;
  }

  .fourth-middle {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
    background-color: blue;
    border: 2px solid black;
    outline-style: solid;
    outline-color: black;
  }

  .fourth-class {
    display: flex;
    width: 80%;
    height: 250px;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: red;
    border: 2px solid black;
    outline-style: solid;
    outline-color: black;
  }

  .fourth-five {
    display: flex;
    width: 50%;
    height: 50px;
    align-items: center;
    justify-content: center;
    background-color: blue;
    border: 2px solid black;
    outline-style: solid;
    outline-color: black;
  }

  .fifth-middle {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50%;
    align-items: center;
    justify-content: center;
    background-color: blue;
    border: 2px solid black;
    outline-style: solid;
    outline-color: black;
  }

  .fifth-box {
    display: flex;
    width: 80%;
    height: 25%;
    margin: 10px;
    align-items: center;
    justify-content: center;
    background-color: red;
    border: 2px solid black;
    outline-style: solid;
    outline-color: black;
  }

  .sixth-middle {
    display: none;
  }
}
</style>
