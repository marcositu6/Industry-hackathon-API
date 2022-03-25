import axios from "axios";
import React from "react";
const PORT = "8080";
const apiURL = `http://localhost:${PORT}`;

class InventoryItemDetails extends React.Component {
  // class states =>
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      questionTitle: "",
      options: {},
      Q1: "",
      Q2: "",
      Q3: "",
      Q4: "",
      Q5: "",
      Q6: "",
    };
  }

  fetchData() {
    let call = "";

    if (this.question === 1) {
      call = "first";
    } else if (this.question === 2) {
      call = "second";
    } else if (this.question === 3) {
      call = "third";
    } else if (this.question === 4) {
      call = "fourth";
    } else if (this.question === 5) {
      call = "fifth";
    } else if (this.question === 6) {
      call = "sixth";
    }

    axios.get(`${apiURL}/${call}`).then((response) => {
      this.setState({
        questionTitle: response.data.question,
        options: response.data.options,
      });
    });
  }

  // calls fetch data once component is mounted
  componentDidMount() {
    // change tittle of webpage
    document.title = "Onboarding form";
    this.fetchData();
  }

  handleNext(e) {
    this.setState({
      [`Q${this.state.question}`]: e.option.value,
      question: prevState.question + 1,
    });
    console.log(Q1);
    console.log(question);
    this.fetchData();
  }
  handleSubmit(e) {
    console.log(e);
    const answers = {
      businessType: this.state.Q1,
      Q2: this.state.Q2,
      Q3: this.state.Q3,
      Q4: this.state.Q4,
      Q5: this.state.Q5,
      budget: this.state.Q6,
    };
    console.log(answers);
    axios
      .post(`${apiURL}/API`, answers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleBack() {
    this.setState({
      question: prevState.question - 1,
    });
    console.log(question);
    this.fetchData();
  }

  render() {
    return <></>;
  }
}

export default InventoryItemDetails;
