const SUPABASE_URL = "https://pjkzxrbjnrarhglwecwq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqa3p4cmJqbnJhcmhnbHdlY3dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxNTM2NjEsImV4cCI6MjA3MjcyOTY2MX0.pPrx6Ud20Zt2hcuxGaBm45f2rwADfGgokqt16zHXhrI";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const firstName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("submit");
const from = document.getElementById("myForm");

from.addEventListener("submit", async (e) => {
  e.preventDefault();
  const nameVal = firstName.value;
  const emailVal = email.value;
  const passwordVal = password.value;

  if (nameVal.length < 3) {
    alert("Username must be at least 3 characters long");
    return;
  }

  if (!emailVal.includes("@")) {
    alert("Please Enter Valid Email");
    return;
  }

  if (passwordVal.length < 6) {
    alert("password must be at least 6 characters long");
    return;
  }

  firstName.value = "";
  email.value = "";
  password.value = "";

  alert("Form Submited Successfully!");
  // ====
  const { data, error } = await supabase.from("form validation").insert({
    name: nameVal,
    email: emailVal,
    password: passwordVal,
  });

  if (error) {
    alert(error.message);
  }
  console.log(data);
  // ==
});

window.addEventListener("DOMContentLoaded", async () => {
  const { data, error } = await supabase
    .from("form validation")
    .select("*")
    .order("id", { ascending: false })
    .limit(1);

  if (error) {
    alert(error.message);
    return;
  }

  if (data && data.length > 0) {
    const lastUser = data[0];

    firstName.value = lastUser.name;
    email.value = lastUser.email;
    password.value = lastUser.password;
  }
});
