import styled, { css } from 'styled-components';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material';

const CheckoutFormContainer = styled('div')(({ theme }) => ({
    width: '44.4rem',
    height: '23.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignItems: 'flex-start',
    gap: '1.25rem',
    marginTop: '1.5rem',
}));

const FormSegment = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: '1.9375rem',
    width: '44.4rem',
});

const InputLayout = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '0.5rem',
});

const CustomedInputLayout = styled(InputLayout)({
    flex: '1',
    width: '100%',
    margin: '0',
});
const LabelText = styled('div')({
    color: 'var(--Type-High-Emphasis, #171520)',
    /* Paragraph/M-16px */
    fontFamily: 'Inter',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '1.25rem',/* 125% */
});

// Define a base style for InputField
const baseInputFieldStyle = ({ theme }) => css`
    color: ${theme?.palette?.type === 'dark' ? '#fff' : theme?.palette?.text?.primary};
    fontFamily: 'Inter';
    fontSize: '1rem';
    fontWeight: 500;
    lineHeight: '1.25rem';
    width: 17.9rem;
    display: flex;
    padding: 1rem 0.75rem 1rem 1rem;
    alignItems: center;
    gap: 0.75rem;
    alignSelf: stretch;
    borderRadius: 0.25rem;
    background: var(--Grey, #F1F1F1);
`;

// Create InputField styled component
const InputField = styled(TextField)`
    ${baseInputFieldStyle}
`;

const CustomInputField = styled(TextField)`
    ${baseInputFieldStyle}
    flex: 1; 
    width: 100%; 
    margin: 0; 
`;
const MobileBegining = styled(TextField)`
    ${baseInputFieldStyle}
    width: 5rem; 
    display: flex;
    padding: 1rem 0.75rem 1rem 1rem;
    align-items: center;
    gap: 0.75rem;
    align-self: stretch;
`;
const MobileLayout = styled('div')({
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    width: '100%',
});

function AddressForm() {
    const theme = useTheme();
    return (
        <CheckoutFormContainer theme={theme}>
            <FormSegment>
                <InputLayout>
                    <LabelText>First Name</LabelText>
                    <InputField placeholder="Enter First Name" />
                </InputLayout>
                <CustomedInputLayout>
                    <LabelText>Mobile Number</LabelText>
                    <MobileLayout>
                        <MobileBegining placeholder="+11" />
                        <CustomInputField
                            placeholder="Mobile Number"
                        />
                    </MobileLayout>
                </CustomedInputLayout>
            </FormSegment>
            <FormSegment>
                <InputLayout>
                    <LabelText>Last Name</LabelText>
                    <InputField placeholder="Enter Last Name" />
                </InputLayout>
                <CustomedInputLayout>
                    <LabelText>Email</LabelText>
                    <CustomInputField placeholder="Enter Email" />
                </CustomedInputLayout>
            </FormSegment>
            <FormSegment>
                <InputLayout>
                    <LabelText>Location</LabelText>
                    <InputField placeholder="Enter Location" />
                </InputLayout>
            </FormSegment>
        </CheckoutFormContainer>
    );
}

export default AddressForm;