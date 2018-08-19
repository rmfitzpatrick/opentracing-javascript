import Span from './span';
import SpanContext from './span_context';
import { SyncSpanManager } from './span_manager';
import Tracer from './tracer';

export let tracer: Tracer | null = null;
export let spanContext: SpanContext | null = null;
export let span: Span | null = null;
export let spanManager: SyncSpanManager | null = null;

// Deferred initialization to avoid a dependency cycle where Tracer depends on
// Span which depends on the noop tracer.
export function initialize(): void {
    tracer = new Tracer();
    span = new Span();
    spanContext = new SpanContext();
    spanManager = new SyncSpanManager();
}
