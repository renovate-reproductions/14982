export const Center: FunctionComponent<CenterProps> = ({
  children,
  className
}: CenterProps): React.ReactElement => (
  <table cellSpacing="0" cellPadding="0" className={className}>
    <tr>
      <td align="center">{children}</td>
    </tr>
  </table>
)
