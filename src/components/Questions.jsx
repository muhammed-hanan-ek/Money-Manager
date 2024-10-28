import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

const Questions = () => {

    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

  return (
    <div className='container mb-5 mt-5'>
        <h1 style={{fontSize:"30px"}} className='fw-bold ms-2 pt-5 pb-2 mb-5'>Frequently Asked Questions</h1>

      {/* Question 1 */}
      <div className="btn btn-link d-flex justify-content-between text-dark" style={{ textDecoration: "none" }} onClick={() => toggleSection(1)}
        aria-controls="collapse-question-1"
        aria-expanded={openSection === 1}>
        <h5>What is personal expense tracking, and why is it essential?</h5>
        <h5><i className="fa-solid fa-chevron-down"></i></h5>
      </div>
      <Collapse in={openSection === 1}>
        <div id="collapse-question-1" className='container fs-5'>
          Personal expense tracking involves monitoring your daily spending to understand where your money is going. It's essential because it helps you stay within budget, save for future goals, and avoid unnecessary debt.
        </div>
      </Collapse>
      <hr />

      {/* Question 2 */}
      <div className="btn btn-link d-flex justify-content-between text-dark" style={{ textDecoration: "none" }} onClick={() => toggleSection(2)}
        aria-controls="collapse-question-2"
        aria-expanded={openSection === 2}>
        <h5>How can I categorize my expenses using Money Manager?</h5>
        <h5><i className="fa-solid fa-chevron-down"></i></h5>
      </div>
      <Collapse in={openSection === 2}>
        <div id="collapse-question-2" className='container fs-5'>
          Money Manager allows you to categorize expenses easily. You can assign each transaction to predefined categories like food, rent, utilities, or create custom categories. This helps in tracking specific areas of your spending for better analysis.
        </div>
      </Collapse>
      <hr />

      {/* Question 3 */}
      <div className="btn btn-link d-flex justify-content-between text-dark" style={{ textDecoration: "none" }} onClick={() => toggleSection(3)}
        aria-controls="collapse-question-3"
        aria-expanded={openSection === 3}>
        <h5>How does Money Manager handle income tracking along with expenses?</h5>
        <h5><i className="fa-solid fa-chevron-down"></i></h5>
      </div>
      <Collapse in={openSection === 3}>
        <div id="collapse-question-3" className='container fs-5'>
          Along with tracking expenses, Money Manager helps users track their income streams. By recording all income and comparing it to expenses, the app provides a clear view of your financial balance, making it easy to plan savings or investments.
        </div>
      </Collapse>
      <hr />

      {/* Question 4 */}
      <div className="btn btn-link d-flex justify-content-between text-dark" style={{ textDecoration: "none" }} onClick={() => toggleSection(4)}
        aria-controls="collapse-question-4"
        aria-expanded={openSection === 4}>
        <h5>How can I reduce unnecessary spending and save more money?</h5>
        <h5><i className="fa-solid fa-chevron-down"></i></h5>
      </div>
      <Collapse in={openSection === 4}>
        <div id="collapse-question-4" className='container fs-5'>
          To reduce unnecessary spending, start by tracking all your expenses to identify where your money goes. Cut back on non-essential items like dining out or subscription services, and look for ways to reduce costs (e.g., buying in bulk, using coupons). Setting saving goals, automating savings, and reviewing expenses regularly can also help.
        </div>
      </Collapse>
      <hr />
    </div>
  );
}

export default Questions;
