const cycle = process.env.CICLO_BILLING;
const month = process.env.MES_BILLING;
const year = process.env.ANO_BILLING;


export const commandShell = `
ls -la;
pwd;
cd test/;
ls -la;
./script.sh ${cycle} ${month} ${year};
exit;
`;