export function notAdminValidator(control: any) {
  console.log('Validator running, value:', control.value);
  return control.value === 'admin'
    ? { notAdmin: true }
    : null;
}
