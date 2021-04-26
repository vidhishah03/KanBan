import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const StyledButton = styled(Button)`
	&& {
		color: white;
		background: #ce897b;
	}
`;

const KanbanButton = ({ children, onClick }) => {
	return (
		<StyledButton variant="contained" onMouseDown={onClick}>
			{children}
		</StyledButton>
	);
};

export default KanbanButton;
