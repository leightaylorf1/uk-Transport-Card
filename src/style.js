import { css } from "lit";

export const styles = css`
  ha-card {
    padding: 0;
    overflow: hidden;
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 16px 8px;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
  }

  .card-header h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header-icon {
    color: var(--secondary-text-color);
    --mdc-icon-size: 18px;
  }

  .card-content {
    padding: 0 0 4px;
  }

  .no-services {
    padding: 16px;
    color: var(--secondary-text-color);
    font-size: 0.9rem;
    text-align: center;
  }

  .section-heading {
    padding: 8px 16px 6px;
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--secondary-text-color);
    text-transform: uppercase;
    letter-spacing: 0.03em;
    border-top: 1px solid var(--divider-color, rgba(0, 0, 0, 0.08));
  }

  /* ── Service row ─────────────────────────────────────────── */
  .service-row {
    display: grid;
    grid-template-columns: 22px 52px 1fr auto auto auto;
    align-items: center;
    gap: 6px;
    padding: 7px 16px;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.06));
    transition: background 0.15s;
  }

  .service-row:last-child {
    border-bottom: none;
  }

  /* ── Status colour stripe (left border) + row highlight ─── */
  .service-row.good {
    border-left: 3px solid var(--success-color, #4caf50);
  }

  .service-row.warning {
    border-left: 3px solid var(--warning-color, #ff9800);
    background: rgba(255, 152, 0, 0.07);
    border-bottom-color: rgba(255, 152, 0, 0.3);
  }

  .service-row.perturbed {
    border-left: 3px solid var(--error-color, #f44336);
    background: rgba(244, 67, 54, 0.07);
    border-bottom-color: rgba(244, 67, 54, 0.3);
  }

  .service-icon-slot {
    display: inline-flex;
    width: 20px;
    justify-content: center;
  }

  .service-icon {
    color: var(--secondary-text-color);
    --mdc-icon-size: 16px;
  }

  /* ── Cells ───────────────────────────────────────────────── */
  .service-line {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--primary-text-color);
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    border-radius: 4px;
    padding: 2px 6px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .service-destination {
    font-size: 0.9rem;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .service-times {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1px;
  }

  .platform {
    font-size: 0.74rem;
    color: var(--secondary-text-color);
    border: 1px solid var(--divider-color, rgba(0, 0, 0, 0.2));
    border-radius: 4px;
    padding: 1px 5px;
    min-width: 28px;
    text-align: center;
  }

  .scheduled-time {
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .expected-time {
    font-size: 0.78rem;
    color: var(--warning-color, #ff9800);
  }

  /* ── Badges ──────────────────────────────────────────────── */
  .badge {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    border-radius: 10px;
    padding: 2px 7px;
    white-space: nowrap;
  }

  .badge.due {
    background: var(--info-color, #2196f3);
    color: #fff;
  }

  .badge.good {
    background: var(--success-color, #4caf50);
    color: #fff;
  }

  .badge.warning {
    background: var(--warning-color, #ff9800);
    color: #fff;
  }

  .badge.perturbed {
    background: var(--error-color, #f44336);
    color: #fff;
  }

  /* ── Error / stale banner ────────────────────────────────── */
  .error-banner {
    margin: 8px 16px;
    padding: 6px 10px;
    border-radius: 4px;
    background: var(--error-color, #f44336);
    color: #fff;
    font-size: 0.8rem;
  }
`;

export const editorStyles = css`
  .form {
    padding: 16px;
  }
`;
