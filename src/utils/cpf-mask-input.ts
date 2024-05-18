export function formatCPF(value: string): string {
    // Remove qualquer caracter que não seja número
    const cleanedValue = value.replace(/\D/g, '')

    // Formata o CPF
    const formattedValue = cleanedValue
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2')

    return formattedValue
}
