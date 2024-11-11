import nodemailer from "nodemailer";

//crear el transporte

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nucbazappi3317@gmail.com",
    pass: "Lalala24*",
  },
  from: "nuncbazappi3317@gmail.com",
});

export const sendEmail = async (to: string, code: string): Promise<void> => {
  try {
    const mailOption = {
      from: "NucbazAPI - La 3839 manda!",
      to,
      subject: "Código de verificación para tu cuenta",
      text: `Llegó tu código para nucbazAPI,
            El código es:${code}`,
    };
    await transporter.sendMail(mailOption);
    console.log("Correo electrónico enviado");
  } catch (err) {
    console.log("Error al eviar el correo", err);
  }
};
