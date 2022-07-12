export function emailValidator(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email) return "Email can't be empty!";// required
    if (re.test(email)) return 'Ooops! We need a valid email !'; //format error msg
    return '';
  }
  