import QuestionModel from "../models/question.model"

const questionsSection1Constant: Array<QuestionModel> = [
  {
    question: "ให้น้อง ๆ แนะนำตัวในแบบของน้องให้พี่รู้จัก",
    type: "multiline"
  },
  {
    question:
      'ให้น้องเรียงจุดมุ่งหมายในการเข้าร่วมกิจกรรมค่ายลานเกียร์ครั้งที่ 20 (เรียงลำดับจากมากไปน้อย โดยระบุเลข 1 - 4 เมื่อ “1” คือ มากที่สุด และ “4” คือ น้อยที่สุด) <span style="color: red;">โดยห้ามระบุอันดับซ้ำกันและต้องระบุให้ครบทุกอันดับ</span>',
    type: "ranking",
    contents: [
      { label: "เพื่อใช้เวลาว่างให้เกิดประโยชน์" },
      { label: "หาประสบการณ์ในการเข้าค่าย" },
      { label: "เพื่อเป็นแนวทางในการตัดสินใจต่อ" },
      { label: "ผู้ปกครองต้องการให้เข้าร่วมกิจกรรม" }
    ]
  },
  {
    question: "ทำไมน้องถึงอยากมาค่ายลานเกียร์ และน้องคาดหวังว่าจะได้อะไรกลับไปจากค่ายนี้",
    type: "multiline"
  },
  {
    question: "น้องทราบข่าวค่ายลานเกียร์ครั้งที่ 20 จากที่ใด/ผู้ใด (เลือกได้มากกว่า 1 ข้อ)",
    type: "checkbox",
    contents: [
      { label: "Facebook page : LarnGear Camp" },
      { label: "คนในครอบครัว" },
      { label: "ครู/อาจารย์" },
      { label: "ผู้ปกครองต้องการให้เข้าร่วมกิจกรรม" },
      { label: "เว็บไซต์ (โปรดระบุชื่อเว็บไซต์)", textfield: true },
      { label: "อื่นๆ (โปรดระบุ)", textfield: true }
    ]
  },
  {
    question: "น้องเคยเข้าค่ายวิชาการอะไรมาบ้าง ให้ระบุชื่อค่ายและหน่วยงานที่จัด",
    type: "multiline"
  },
  {
    question: "น้องมีความต้องการที่จะเข้าศึกษาต่อในคณะวิศวกรรมศาสตร์เพียงใด",
    type: "radio",
    contents: [
      { label: "ต้องการศึกษาต่อในคณะวิศวกรรมศาสตร์อย่างแน่นอน" },
      { label: "ยังไม่แน่ใจ" },
      { label: "ไม่ต้องการเข้าศึกษาต่อในคณะวิศวกรรมศาสตร์" }
    ]
  },
  {
    question: "อยากบอกอะไรกับพี่ๆ ค่ายลานเกียร์ไหม",
    type: "multiline"
  }
]

export { questionsSection1Constant }