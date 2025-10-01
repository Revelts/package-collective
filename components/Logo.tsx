export default function Logo({ ...rest }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center' }} {...rest}>
      <img
        src="/logo-package.png"
        alt="Package logo"
        style={{ height: 75, width: 75, marginRight: -5, filter: 'var(--logoImageFilter)' }}
      />
      <span style={{ fontFamily: 'Impact, Arial Black, sans-serif', fontSize: 24, lineHeight: 1, color: 'currentColor' }}>
        PACKAGE COLLECTIVE
      </span>
    </span>
  );
}
