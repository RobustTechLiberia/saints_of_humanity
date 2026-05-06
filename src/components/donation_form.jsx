import React from "react";
import { Link } from "react-router-dom";

class DonationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      donationType: "one-off",
      selectedAmount: "$10",
      otherAmount: "",
      donationMessage: "",
      paymentDetails: {
        provider: "Lonestar MTN",
        mobileMoneyNumber: "",
      },
      billingDetails: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  }

  handleNextStep = (event) => {
    event.preventDefault();

    this.setState((prevState) => ({
      currentStep: Math.min(prevState.currentStep + 1, 2),
    }));
  };

  handlePreviousStep = () => {
    this.setState((prevState) => ({
      currentStep: Math.max(prevState.currentStep - 1, 0),
    }));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleNestedChange = (section, event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  renderStepIndicator() {
    const steps = ["Donation amount", "Payment details", "Billing details"];
    const { currentStep } = this.state;

    return (
      <div className="mb-12 flex items-start justify-between gap-4 text-center text-sm text-[#6b6f76]">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={step} className="flex min-w-0 flex-1 flex-col items-center">
              <div className="mb-3 flex w-full items-center">
                <span
                  className={`h-3 w-3 rounded-full ${
                    isActive || isCompleted ? "bg-black" : "bg-[#d8dbe2]"
                  }`}
                />
                {index < steps.length - 1 ? (
                  <span className="h-0.5 flex-1 bg-[#e2e4ea]" />
                ) : null}
              </div>
              <span className={isActive ? "font-medium text-black" : ""}>
                {step}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  renderDonationAmountStep() {
    const { donationType, selectedAmount, otherAmount, donationMessage } =
      this.state;
    const amountOptions = ["$10", "$25", "$50", "$100"];

    return (
      <>
        <div className="mb-10 grid grid-cols-2 overflow-hidden rounded-none bg-[#eff1f5] text-center text-lg">
          <button
            type="button"
            onClick={() => this.setState({ donationType: "one-off" })}
            className={`px-4 py-3 font-semibold ${
              donationType === "one-off"
                ? "bg-black text-white"
                : "text-[#333740]"
            }`}
          >
            One-Off Donation
          </button>
          <button
            type="button"
            onClick={() => this.setState({ donationType: "monthly" })}
            className={`px-4 py-3 font-medium ${
              donationType === "monthly"
                ? "bg-black text-white"
                : "text-[#333740]"
            }`}
          >
            Monthly Donation
          </button>
        </div>

        <div className="mb-5 text-center">
          <h2 className="text-2xl font-semibold text-[#555b65]">
            Donation amount
          </h2>
        </div>

        <div className="mb-3 grid grid-cols-4 overflow-hidden rounded-none border border-black">
          {amountOptions.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => this.setState({ selectedAmount: amount })}
              className={`py-3 text-lg ${
                selectedAmount === amount
                  ? "bg-black font-medium text-white"
                  : "border-l border-black bg-white font-normal text-black first:border-l-0"
              }`}
            >
              {amount}
            </button>
          ))}
        </div>

        <div className="mb-5">
          <input
            type="text"
            name="otherAmount"
            value={otherAmount}
            onChange={this.handleChange}
            placeholder="Other"
            className="w-full rounded-none border border-black px-4 py-3 text-lg text-gray-900 outline-none placeholder:text-gray-500"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="donation-message"
            className="text-xl font-semibold text-gray-900"
          >
            Donation message (optional)
          </label>
        </div>

        <div className="mb-8">
          <textarea
            id="donation-message"
            name="donationMessage"
            rows="4"
            value={donationMessage}
            onChange={this.handleChange}
            placeholder="Input your message"
            className="min-h-32 w-full rounded-none border border-[#9ea3ab] px-4 py-3 text-lg text-[#333740] outline-none placeholder:text-[#c4c7cf]"
          />
        </div>
      </>
    );
  }

  renderPaymentDetailsStep() {
    const { paymentDetails } = this.state;

    return (
      <div className="mb-8 space-y-5">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#555b65]">
            Payment details
          </h2>
        </div>

        <div>
          <label
            htmlFor="provider"
            className="mb-2 block text-lg font-semibold text-gray-900"
          >
            Mobile money provider
          </label>
          <select
            id="provider"
            name="provider"
            value={paymentDetails.provider}
            onChange={(event) => this.handleNestedChange("paymentDetails", event)}
            className="w-full rounded-none border border-black bg-white px-4 py-3 text-lg text-gray-900 outline-none"
          >
            <option value="Lonestar MTN">Lonestar MTN</option>
            <option value="Orange Money">Orange Money</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="mobileMoneyNumber"
            className="mb-2 block text-lg font-semibold text-gray-900"
          >
            Mobile money number
          </label>
          <input
            id="mobileMoneyNumber"
            type="tel"
            name="mobileMoneyNumber"
            value={paymentDetails.mobileMoneyNumber}
            onChange={(event) => this.handleNestedChange("paymentDetails", event)}
            placeholder="Enter your mobile money number"
            className="w-full rounded-none border border-black px-4 py-3 text-lg text-gray-900 outline-none placeholder:text-gray-500"
          />
        </div>
      </div>
    );
  }

  renderBillingDetailsStep() {
    const { billingDetails } = this.state;

    return (
      <div className="mb-8 space-y-5">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-[#555b65]">
            Billing details
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input
            type="text"
            name="firstName"
            value={billingDetails.firstName}
            onChange={(event) => this.handleNestedChange("billingDetails", event)}
            placeholder="First name"
            className="w-full rounded-none border border-black px-4 py-3 text-lg text-gray-900 outline-none placeholder:text-gray-500"
          />
          <input
            type="text"
            name="lastName"
            value={billingDetails.lastName}
            onChange={(event) => this.handleNestedChange("billingDetails", event)}
            placeholder="Last name"
            className="w-full rounded-none border border-black px-4 py-3 text-lg text-gray-900 outline-none placeholder:text-gray-500"
          />
        </div>
        <input
          type="email"
          name="email"
          value={billingDetails.email}
          onChange={(event) => this.handleNestedChange("billingDetails", event)}
          placeholder="Email address"
          className="w-full rounded-none border border-black px-4 py-3 text-lg text-gray-900 outline-none placeholder:text-gray-500"
        />
      </div>
    );
  }

  renderCurrentStep() {
    const { currentStep } = this.state;

    if (currentStep === 1) {
      return this.renderPaymentDetailsStep();
    }

    if (currentStep === 2) {
      return this.renderBillingDetailsStep();
    }

    return this.renderDonationAmountStep();
  }

  renderActionButtons() {
    const { currentStep } = this.state;

    return (
      <div className="flex justify-between gap-4">
        <button
          type="button"
          onClick={this.handlePreviousStep}
          className={`rounded-none border border-black px-5 py-2 text-md font-semibold text-black ${
            currentStep === 0 ? "invisible" : ""
          }`}
        >
          Previous
        </button>
        <button
          type={currentStep === 2 ? "submit" : "button"}
          onClick={currentStep === 2 ? undefined : this.handleNextStep}
          className="min-w-24 rounded-none bg-black px-5 py-2 text-md font-semibold text-white shadow-[0_4px_0_0_#111111]"
        >
          {currentStep === 2 ? "Submit" : "Next step"}
        </button>
      </div>
    );
  }

  render() {
    return (
      <form className="mx-auto w-full max-w-2xl bg-white px-6 py-8 font-sans text-[#1d1d1f] md:px-10">
        <div className="my-3">
          <Link to="/" className="my-5 font-sans capitalize text-black">
            back
          </Link>
        </div>

        {this.renderStepIndicator()}

        <div className="mb-8 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-[#17181c]">
            Donate
          </h1>
        </div>

        {this.renderCurrentStep()}

        {this.renderActionButtons()}
      </form>
    );
  }
}

export default DonationForm;
